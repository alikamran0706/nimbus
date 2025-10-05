import mongoose, { Schema } from "mongoose"

const CommunicationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", index: true },
    channel: { type: String, enum: ["email", "message", "whatsapp"], default: "email" },
    company: { type: String },
    subject: { type: String },
    preview: { type: String },
    date: { type: Date, default: Date.now },
    read: { type: Boolean, default: false },
    starred: { type: Boolean, default: false },
  },
  { timestamps: true },
)

export const CommunicationModel = mongoose.model("Communication", CommunicationSchema)
