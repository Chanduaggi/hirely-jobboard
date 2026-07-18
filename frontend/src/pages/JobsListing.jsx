import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import { jobs as allJobs } from '../data/mockData'
import Filters from '../components/Filters'
import JobCard from '../components/JobCard'
import { SkeletonJobCard } from '../components/Skeletons'
import EmptyState from '../components/EmptyState'

const defaultFilters = { query: '', location: '', type: [], experience: [], remote: [], minSalary: 0 }

export default function JobsListing() {
  const [params] = useSearchParams()
  const [filters, setFilters] = useState({ ...defaultFilters, query: params.get('q') || '' })
  const [sort, setSort] = useState('relevance')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  const filtered = useMemo(() => {
    let list = allJobs.filter((job) => {
      const q = filters.query.toLowerCase()
      const matchesQuery =
        !q || job.title.toLowerCase().includes(q) || job.company.toLowerCase().includes(q) || job.skills.some((s) => s.toLowerCase().includes(q))
      const matchesLocation = !filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase()) || (filters.location.toLowerCase() === 'remote' && job.remote === 'Remote')
      const matchesType = filters.type.length === 0 || filters.type.includes(job.type)
      const matchesExp = filters.experience.length === 0 || filters.experience.includes(job.experience)
      const matchesRemote = filters.remote.length === 0 || filters.remote.includes(job.remote)
      return matchesQuery && matchesLocation && matchesType && matchesExp && matchesRemote
    })

    if (sort === 'salary-high') {
      list = [...list].sort((a, b) => parseSalary(b.salary) - parseSalary(a.salary))
    } else if (sort === 'newest') {
      list = [...list] // mock ordering already newest-first
    }
    return list
  }, [filters, sort])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Find Your Next Role</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Browse curated software engineering & tech roles.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
        <Filters filters={filters} setFilters={setFilters} onReset={() => setFilters(defaultFilters)} />

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {loading ? 'Searching…' : <><span className="font-semibold text-secondary dark:text-white">{filtered.length}</span> results found</>}
            </p>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="input-field w-auto">
              <option value="relevance">Sort: Relevance</option>
              <option value="newest">Sort: Newest</option>
              <option value="salary-high">Sort: Salary (High to Low)</option>
            </select>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => <SkeletonJobCard key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={SearchX}
              title="No jobs match your filters"
              description="Try broadening your search or resetting filters to see more roles."
              action={<button onClick={() => setFilters(defaultFilters)} className="btn-primary mt-4">Reset Filters</button>}
            />
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((job) => <JobCard key={job.id} job={job} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function parseSalary(s) {
  const match = s.match(/₹(\d+)L/g)
  if (!match) return 0
  return Math.max(...match.map((m) => parseInt(m.replace('₹', '').replace('L', ''), 10)))
}
