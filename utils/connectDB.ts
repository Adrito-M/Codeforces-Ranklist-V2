import mongoose from 'mongoose'

const connection: { isConnected?: mongoose.ConnectionStates } = {}

export const dbConnect = async () => {
  if (connection.isConnected) return
  const db = await mongoose.connect(process.env.MONGO_URI)
  connection.isConnected = db.connections[0].readyState
  console.log('\x1b[33m Connected to MongoDB\x1b[0m')
}
