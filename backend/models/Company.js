import mongoose from 'mongoose'

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    logo: { type: String },
    industry: { type: String },
    website: { type: String },
  },
  { timestamps: true },
)

export default mongoose.model('Company', companySchema)
