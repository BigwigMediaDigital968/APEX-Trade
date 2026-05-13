import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { connectDB } from '@/app/lib/mongodb'
import { Otp } from '@/app/models/Otp'

const OTP_EXPIRY_MINUTES = 10
const MAX_RESENDS = 3  // per expiry window

export async function POST(req: NextRequest) {
  const { phone } = await req.json()

  const phoneRegex = /^\+[1-9]\d{6,14}$/
  if (!phone || !phoneRegex.test(phone))
    return NextResponse.json({ error: 'Valid phone (+91XXXXXXXXXX) required' }, { status: 400 })

  await connectDB()

  // Rate limit: block if too many resends within the window
  const existing = await Otp.findOne({ phone })
  if (existing && existing.attempts >= MAX_RESENDS) {
    return NextResponse.json(
      { error: 'Too many OTP requests. Please wait 10 minutes.' },
      { status: 429 }
    )
  }

  const otp = crypto.randomInt(100000, 999999).toString()
  const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000)

  // Upsert: replace existing OTP for this phone
  await Otp.findOneAndUpdate(
    { phone },
    {
      otp,
      expiresAt,
      attempts: existing ? existing.attempts + 1 : 0,
    },
    { upsert: true, new: true }
  )

  // Fire AiSensy API
  const aiRes = await fetch('https://backend.aisensy.com/campaign/t1/api/v2', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apiKey:         process.env.AISENSY_API_KEY,
      campaignName:   'signup_otp_campaign',
      destination:    phone,
      source:         'signup',
      templateParams: ['YourAppName', otp],
    }),
  })

  if (!aiRes.ok) {
    const err = await aiRes.text()
    console.error('AiSensy error:', err)
    return NextResponse.json({ error: 'Failed to send OTP. Try again.' }, { status: 500 })
  }

  return NextResponse.json({ success: true, message: 'OTP sent on WhatsApp' })
}