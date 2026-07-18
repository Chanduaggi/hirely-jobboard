import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.js'
import jobRoutes from './routes/jobs.js'
import companyRoutes from './routes/companies.js'
import userRoutes from './routes/users.js'

dotenv.config()

const app = express()
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }))
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }))
app.use('/api/auth', authRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/companies', companyRoutes)
app.use('/api/users', userRoutes)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: 'Internal server error' })
})

const PORT = process.env.PORT || 5000

const startServer = () => {
  app.listen(PORT, () => console.log(`API running on port ${PORT}`))
}

const connectToMongoDB = async () => {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    throw new Error('MONGODB_URI is not set')
  }

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 20000,
  })
}

connectToMongoDB()
  .then(() => {
    console.log('Connected to MongoDB Atlas')
    startServer()
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err?.message || err)
    process.exit(1)
  })
