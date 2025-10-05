import mongoose from 'mongoose';

export async function connectDB(uri) {
  if (!uri) throw new Error("Missing MONGODB_URI")
  mongoose.set("strictQuery", true)
  await mongoose.connect(uri, {
    autoIndex: true,
  })
  return mongoose.connection
}

