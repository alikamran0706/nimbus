import mongoose, { Schema } from "mongoose"

const ResumeSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", unique: true },
    referenceNo: String,
    firstName: String,
    lastName: String,
    email: String,
    contactNo: String,
    nationality: String,
    experience: String,
    industry: String,
    dateOfBirth: String,
  },
  { timestamps: true },
)

export const ResumeModel = mongoose.model("Resume", ResumeSchema)
