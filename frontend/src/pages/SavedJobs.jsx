import { Link } from 'react-router-dom'
import { BookmarkX } from 'lucide-react'
import { jobs } from '../data/mockData'
import { useAuth } from '../context/AuthContext'
import JobCard from '../components/JobCard'
import EmptyState from '../components/EmptyState'

export default function SavedJobs() {
  const { user, savedJobIds } = useAuth()
  const saved = jobs.filter((j) => savedJobIds.includes(j.id))

  if (!user) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20">
        <EmptyState
          icon={BookmarkX}
          title="Log in to see your saved jobs"
          description="Create an account or log in to bookmark roles and access them anytime."
          action={<Link to="/login" className="btn-primary mt-4">Log In</Link>}
        />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">Saved Jobs</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{saved.length} role{saved.length !== 1 && 's'} bookmarked</p>

      {saved.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            icon={BookmarkX}
            title="No saved jobs yet"
            description="Tap the bookmark icon on any job card to save it here for later."
            action={<Link to="/jobs" className="btn-primary mt-4">Browse Jobs</Link>}
          />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {saved.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
      )}
    </div>
  )
}
