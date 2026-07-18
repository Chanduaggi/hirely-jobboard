import { Router } from 'express'
import Job from '../models/Job.js'
import { requireAuth, requireAdmin } from '../middleware/auth.js'

const router = Router()

// GET /api/jobs?query=&location=&type=&experience=&remote=
router.get('/', async (req, res) => {
  const { query, location, type, remote } = req.query
  const filter = {}
  if (query) filter.title = { $regex: query, $options: 'i' }
  if (location) filter.location = { $regex: location, $options: 'i' }
  if (type) filter.type = type
  if (remote) filter.remote = remote

  const jobs = await Job.find(filter).populate('company').sort({ createdAt: -1 })
  res.json(jobs)
})

router.get('/:id', async (req, res) => {
  const job = await Job.findById(req.params.id).populate('company')
  if (!job) return res.status(404).json({ message: 'Job not found' })
  res.json(job)
})

router.post('/', requireAuth, requireAdmin, async (req, res) => {
  const job = await Job.create({ ...req.body, postedBy: req.user.id })
  res.status(201).json(job)
})

router.put('/:id', requireAuth, requireAdmin, async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!job) return res.status(404).json({ message: 'Job not found' })
  res.json(job)
})

router.delete('/:id', requireAuth, requireAdmin, async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id)
  if (!job) return res.status(404).json({ message: 'Job not found' })
  res.json({ message: 'Job deleted' })
})

export default router
