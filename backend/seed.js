// Seeds the database with the same sample data used by the frontend mocks.
// Run with: npm run seed  (after setting MONGODB_URI in .env)
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Company from './models/Company.js'
import Job from './models/Job.js'

dotenv.config()

const companies = [
  { name: 'Nimbus Cloud', logo: '☁️', industry: 'Cloud Infrastructure', website: 'https://nimbuscloud.example.com' },
  { name: 'Ledgerly', logo: '💳', industry: 'Fintech', website: 'https://ledgerly.example.com' },
  { name: 'Sundial Analytics', logo: '📊', industry: 'Data & AI', website: 'https://sundial.example.com' },
]

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected. Seeding...')

  await Company.deleteMany({})
  await Job.deleteMany({})

  const createdCompanies = await Company.insertMany(companies)

  await Job.insertMany([
    {
      title: 'Senior Frontend Engineer',
      company: createdCompanies[0]._id,
      location: 'Hyderabad, India',
      remote: 'Hybrid',
      type: 'Full-time',
      experience: '4-6 yrs',
      salaryMin: 2800000,
      salaryMax: 4000000,
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      description: 'Lead development of our customer-facing dashboard.',
      responsibilities: ['Own shared UI components', 'Ship accessible interfaces'],
      requirements: ['4+ years with React', 'Strong TypeScript skills'],
      benefits: ['Health insurance', 'ESOPs'],
    },
  ])

  console.log('Seed complete.')
  await mongoose.disconnect()
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
