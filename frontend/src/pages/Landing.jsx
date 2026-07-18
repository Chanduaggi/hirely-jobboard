import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Search, MapPin, TrendingUp, Users, Building2, Clock3, Star,
  Code2, PenTool, BarChart3, Cloud, Megaphone, Headphones, ArrowRight,
} from 'lucide-react'
import { companies, categories, jobs, testimonials, stats } from '../data/mockData'
import JobCard from '../components/JobCard'

const icons = { Code2, PenTool, BarChart3, Cloud, Megaphone, Headphones }
const statIcons = [TrendingUp, Building2, Users, Clock3]

export default function Landing() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/jobs${query ? `?q=${encodeURIComponent(query)}` : ''}`)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-surface dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <span className="badge bg-primary/10 text-primary">🚀 12,400+ new roles this month</span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-secondary dark:text-white sm:text-5xl lg:text-6xl">
            Find Your <span className="text-primary">Dream Job</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 dark:text-slate-400 sm:text-lg">
            Search thousands of curated roles from companies actively hiring right now.
          </p>

          <form onSubmit={handleSearch} className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white dark:bg-slate-900 p-3 shadow-soft sm:flex-row">
            <div className="relative flex-1">
              
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, company, or keyword"
                className="input-field !border-0 pl-9 focus:!ring-0"
              />
            </div>
            <button type="submit" className="btn-primary">
              Search Jobs <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-slate-400">
            <span>Trending:</span>
            {['Frontend Engineer', 'DevOps', 'Product Designer', 'Data Analyst'].map((t) => (
              <button key={t} onClick={() => navigate(`/jobs?q=${encodeURIComponent(t)}`)} className="hover:text-primary hover:underline">
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured companies */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-slate-400">
          Trusted by fast-growing companies
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((c) => (
            <div key={c.id} className="card flex flex-col items-center gap-2 p-4 text-center">
              <span className="text-3xl">{c.logo}</span>
              <span className="text-sm font-semibold">{c.name}</span>
              <span className="text-xs text-slate-400">{c.openJobs} open roles</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white dark:bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Popular Categories</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Explore jobs by what you do best.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = icons[cat.icon]
              return (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/jobs?category=${encodeURIComponent(cat.name)}`)}
                  className="card flex items-center justify-between p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-semibold">{cat.name}</p>
                      <p className="text-xs text-slate-400">{cat.count} jobs</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-slate-300" />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => {
            const Icon = statIcons[i]
            return (
              <div key={s.label} className="text-center">
                <Icon className="mx-auto mb-2 text-primary" size={22} />
                <p className="text-3xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-sm text-slate-300">{s.label}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Featured jobs */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Featured Jobs</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">Hand-picked roles hiring right now.</p>
          </div>
          <button onClick={() => navigate('/jobs')} className="btn-secondary hidden sm:inline-flex">
            View All <ArrowRight size={15} />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.slice(0, 6).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white dark:bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Loved by candidates</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-6">
                <div className="mb-3 flex gap-1 text-warning">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl">{t.avatar}</span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-primary to-accent px-8 py-14 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to find your next role?</h2>
          <p className="mx-auto mt-2 max-w-md text-primary-50/90">
            Create a free profile and get matched with roles that fit your skills.
          </p>
          <button onClick={() => navigate('/register')} className="mt-6 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft hover:bg-slate-50">
            Get Started <MapPin className="ml-1 inline" size={14} />
          </button>
        </div>
      </section>
    </div>
  )
}
