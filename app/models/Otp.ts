import mongoose, { Schema, model, models } from 'mongoose'

const OtpSchema = new Schema({
  phone:     { type: String, required: true, index: true },
  otp:       { type: String, required: true },
  attempts:  { type: Number, default: 0 },          // track wrong guesses
  expiresAt: { type: Date,   required: true },
})

// MongoDB auto-deletes the document when expiresAt is reached
OtpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })

// Prevent model re-compilation in Next.js dev hot-reload
export const Otp = models.Otp || model('Otp', OtpSchema)