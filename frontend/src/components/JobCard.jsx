import { Link } from 'react-router-dom'
import { MapPin, Clock, Briefcase, Bookmark, IndianRupee } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const remoteBadge = {
  Remote: 'bg-success/10 text-success',
  Hybrid: 'bg-warning/10 text-warning',
  Onsite: 'bg-primary/10 text-primary',
}

export default function JobCard({ job }) {
  const { savedJobIds, toggleSaveJob, user } = useAuth()
  const isSaved = savedJobIds.includes(job.id)

  return (
    <div className="card group p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg animate-fadeUp">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-2xl">
            {job.logo}
          </div>
          <div>
            <Link to={`/jobs/${job.id}`} className="font-semibold text-secondary dark:text-white hover:text-primary">
              {job.title}
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400">{job.company}</p>
          </div>
        </div>
        <button
          onClick={() => user && toggleSaveJob(job.id)}
          aria-label={isSaved ? 'Remove from saved jobs' : 'Save job'}
          title={user ? undefined : 'Log in to save jobs'}
          className={`rounded-lg p-2 transition-colors ${isSaved ? 'text-primary' : 'text-slate-300 hover:text-primary'}`}
        >
          <Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-1"><MapPin size={13} /> {job.location}</span>
        <span className="inline-flex items-center gap-1"><Briefcase size={13} /> {job.experience}</span>
        <span className="inline-flex items-center gap-1"><Clock size={13} /> {job.postedAgo}</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className={`badge ${remoteBadge[job.remote]}`}>{job.remote}</span>
        <span className="badge bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{job.type}</span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary dark:text-white">
          <IndianRupee size={14} /> {job.salary.replace('₹', '')}
        </span>
        <Link to={`/jobs/${job.id}`} className="btn-secondary !px-4 !py-2 text-xs">
          View Details
        </Link>
      </div>
    </div>
  )
}
