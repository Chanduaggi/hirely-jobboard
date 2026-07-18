import { useParams, Link, useNavigate } from 'react-router-dom'
import { MapPin, Briefcase, Clock, IndianRupee, Bookmark, ExternalLink, CheckCircle2, ArrowLeft } from 'lucide-react'
import { jobs, companies } from '../data/mockData'
import { useAuth } from '../context/AuthContext'
import JobCard from '../components/JobCard'
import EmptyState from '../components/EmptyState'
import { SearchX } from 'lucide-react'

export default function JobDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = jobs.find((j) => j.id === id)
  const { user, savedJobIds, toggleSaveJob } = useAuth()

  if (!job) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <EmptyState icon={SearchX} title="Job not found" description="This listing may have been removed or the link is incorrect." action={<Link to="/jobs" className="btn-primary mt-4">Browse Jobs</Link>} />
      </div>
    )
  }

  const company = companies.find((c) => c.id === job.companyId)
  const similar = jobs.filter((j) => j.id !== job.id && (j.companyId === job.companyId || j.skills.some((s) => job.skills.includes(s)))).slice(0, 3)
  const isSaved = savedJobIds.includes(job.id)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <button onClick={() => navigate(-1)} className="mb-6 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-primary">
        <ArrowLeft size={15} /> Back
      </button>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="card p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 text-3xl">{job.logo}</div>
                <div>
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <p className="text-slate-500 dark:text-slate-400">{job.company} • {company?.industry}</p>
                </div>
              </div>
              <button
                onClick={() => user && toggleSaveJob(job.id)}
                className={`btn-secondary !px-4 !py-2 ${isSaved ? '!text-primary !border-primary' : ''}`}
              >
                <Bookmark size={15} fill={isSaved ? 'currentColor' : 'none'} /> {isSaved ? 'Saved' : 'Save'}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 border-y border-slate-100 dark:border-slate-800 py-5 text-sm">
              <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300"><MapPin size={15} /> {job.location}</span>
              <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300"><Briefcase size={15} /> {job.experience} • {job.type}</span>
              <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300"><IndianRupee size={15} /> {job.salary.replace('₹', '')}</span>
              <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300"><Clock size={15} /> Posted {job.postedAgo}</span>
            </div>

            <section className="mt-6">
              <h2 className="text-lg font-semibold">Job Description</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{job.description}</p>
            </section>

            <section className="mt-6">
              <h2 className="text-lg font-semibold">Responsibilities</h2>
              <ul className="mt-2 space-y-2">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" /> {r}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-lg font-semibold">Requirements</h2>
              <ul className="mt-2 space-y-2">
                {job.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-success" /> {r}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-lg font-semibold">Required Skills</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {job.skills.map((s) => <span key={s} className="badge bg-primary/10 text-primary">{s}</span>)}
              </div>
            </section>

            <section className="mt-6">
              <h2 className="text-lg font-semibold">Benefits</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {job.benefits.map((b) => <span key={b} className="badge bg-success/10 text-success">{b}</span>)}
              </div>
            </section>
          </div>

          {similar.length > 0 && (
            <div className="mt-10">
              <h2 className="mb-4 text-lg font-semibold">Similar Jobs</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {similar.map((j) => <JobCard key={j.id} job={j} />)}
              </div>
            </div>
          )}
        </div>

        <div className="h-fit space-y-4 lg:sticky lg:top-24">
          <div className="card p-5">
            <button className="btn-primary w-full">Apply Now</button>
            {company?.website && (
              <a href={company.website} target="_blank" rel="noreferrer" className="btn-secondary mt-3 w-full">
                Visit Company Website <ExternalLink size={14} />
              </a>
            )}
            <div className="mt-5 space-y-3 border-t border-slate-100 dark:border-slate-800 pt-5 text-sm">
              <Row label="Company" value={job.company} />
              <Row label="Industry" value={company?.industry} />
              <Row label="Open Roles" value={`${company?.openJobs} roles`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
