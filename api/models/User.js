import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["candidate", "recruiter", "admin"], default: "candidate" },
    referenceNo: { type: String },
    country: { type: String },
    nationality: { type: String },
    dateOfBirth: { type: String },
    isVerified: { type: Boolean, default: false },
    verificationCode: { type: String },
    verificationCodeExpires: { type: Date },
  },
  { timestamps: true },
)

export const UserModel = mongoose.model("User", UserSchema)
