import { Router } from 'express'
import Company from '../models/Company.js'
import { requireAuth, requireAdmin } from '../middleware/auth.js'

const router = Router()

router.get('/', async (req, res) => {
  const companies = await Company.find().sort({ name: 1 })
  res.json(companies)
})

router.post('/', requireAuth, requireAdmin, async (req, res) => {
  const company = await Company.create(req.body)
  res.status(201).json(company)
})

router.put('/:id', requireAuth, requireAdmin, async (req, res) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!company) return res.status(404).json({ message: 'Company not found' })
  res.json(company)
})

router.delete('/:id', requireAuth, requireAdmin, async (req, res) => {
  const company = await Company.findByIdAndDelete(req.params.id)
  if (!company) return res.status(404).json({ message: 'Company not found' })
  res.json({ message: 'Company deleted' })
})

export default router
