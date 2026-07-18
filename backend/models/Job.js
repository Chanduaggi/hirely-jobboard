import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    location: { type: String, required: true },
    remote: { type: String, enum: ['Remote', 'Hybrid', 'Onsite'], required: true },
    type: { type: String, enum: ['Full-time', 'Part-time', 'Contract', 'Internship'], required: true },
    experience: { type: String, required: true },
    salaryMin: { type: Number },
    salaryMax: { type: Number },
    skills: [{ type: String }],
    description: { type: String, required: true },
    responsibilities: [{ type: String }],
    requirements: [{ type: String }],
    benefits: [{ type: String }],
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
)

export default mongoose.model('Job', jobSchema)
