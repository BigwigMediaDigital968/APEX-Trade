import { connectDB } from '@/app/lib/mongodb'
import { Otp } from '@/app/models/Otp'
import { NextRequest, NextResponse } from 'next/server'

const MAX_WRONG_ATTEMPTS = 5

export async function POST(req: NextRequest) {
  const { phone, otp } = await req.json()

  if (!phone || !otp)
    return NextResponse.json({ error: 'phone and otp required' }, { status: 400 })

  await connectDB()

  const record = await Otp.findOne({ phone })

  if (!record)
    return NextResponse.json({ error: 'OTP not found or expired. Request a new one.' }, { status: 404 })

  // Brute-force guard
  if (record.attempts >= MAX_WRONG_ATTEMPTS) {
    await Otp.deleteOne({ phone })
    return NextResponse.json({ error: 'Too many wrong attempts. Request a new OTP.' }, { status: 429 })
  }

  if (record.otp !== otp) {
    // Increment wrong attempt counter
    await Otp.updateOne({ phone }, { $inc: { attempts: 1 } })
    const left = MAX_WRONG_ATTEMPTS - record.attempts - 1
    return NextResponse.json(
      { error: `Invalid OTP. ${left} attempt${left !== 1 ? 's' : ''} left.` },
      { status: 401 }
    )
  }

  // Correct — delete so it can't be reused
  await Otp.deleteOne({ phone })

  // ✅ Phone verified — create your user session / JWT here
  return NextResponse.json({ success: true, message: 'Phone verified!' })
}