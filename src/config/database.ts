import mongoose from 'mongoose'

const options = { useNewUrlParser: true, useUnifiedTopology: true }

export const modelNames = mongoose.modelNames()

export default async (): Promise<void> => {
  try {
    console.log('Connecting to DB')
    mongoose.connect(process.env.DB_URL || 'test', options)
  } catch (error) {
    console.log('Error connecting to db')
  }
}
