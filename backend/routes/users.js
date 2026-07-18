import { Router } from 'express'
import User from '../models/User.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.get('/me', requireAuth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password').populate('savedJobs')
  res.json(user)
})

router.post('/me/saved-jobs/:jobId', requireAuth, async (req, res) => {
  const user = await User.findById(req.user.id)
  const { jobId } = req.params
  const idx = user.savedJobs.findIndex((id) => id.toString() === jobId)
  if (idx === -1) user.savedJobs.push(jobId)
  else user.savedJobs.splice(idx, 1)
  await user.save()
  res.json({ savedJobs: user.savedJobs })
})

export default router
