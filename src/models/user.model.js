import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      required: [true,"Please provide a username"],
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpire: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
}, { timestamps: true })

export const User =mongoose.models.users || mongoose.model('User',userSchema)