import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Pencil, Trash2, Search, Briefcase, Building2, Users, TrendingUp } from 'lucide-react'
import { adminStats, jobs as seedJobs, companies as seedCompanies, mockUsers } from '../data/mockData'

const icons = [Briefcase, Building2, Users, TrendingUp]
const tabs = ['Jobs', 'Companies', 'Users']

export default function AdminDashboard() {
  const [tab, setTab] = useState('Jobs')
  const [search, setSearch] = useState('')
  const [jobs, setJobs] = useState(seedJobs)
  const [companies] = useState(seedCompanies)

  const removeJob = (id) => setJobs((prev) => prev.filter((j) => j.id !== id))

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Manage jobs, companies, and users.</p>
        </div>
        <Link to="/admin/jobs/new" className="btn-primary"><Plus size={16} /> Add Job</Link>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {adminStats.map((s, i) => {
          const Icon = icons[i]
          return (
            <div key={s.label} className="card p-5">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon size={18} /></span>
                <span className="badge bg-success/10 text-success">{s.change}</span>
              </div>
              <p className="mt-3 text-2xl font-bold">{s.value.toLocaleString()}</p>
              <p className="text-xs text-slate-400">{s.label}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-8 card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 p-4">
          <div className="flex gap-1 rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                  tab === t ? 'bg-white dark:bg-slate-900 shadow-softer text-primary' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={`Search ${tab.toLowerCase()}...`} className="input-field w-64 pl-9" />
          </div>
        </div>

        {tab === 'Jobs' && (
          <Table
            head={['Title', 'Company', 'Location', 'Type', 'Salary', '']}
            rows={jobs.filter((j) => j.title.toLowerCase().includes(search.toLowerCase())).map((j) => [
              j.title, j.company, j.location, j.type, j.salary,
              <RowActions key={j.id} editHref={`/admin/jobs/${j.id}/edit`} onDelete={() => removeJob(j.id)} />,
            ])}
          />
        )}

        {tab === 'Companies' && (
          <Table
            head={['Company', 'Industry', 'Open Roles', 'Website', '']}
            rows={companies.filter((c) => c.name.toLowerCase().includes(search.toLowerCase())).map((c) => [
              `${c.logo} ${c.name}`, c.industry, c.openJobs, c.website.replace('https://', ''),
              <RowActions key={c.id} editHref="#" onDelete={() => {}} />,
            ])}
          />
        )}

        {tab === 'Users' && (
          <Table
            head={['Name', 'Email', 'Role', 'Saved Jobs', '']}
            rows={mockUsers.filter((u) => u.name.toLowerCase().includes(search.toLowerCase())).map((u) => [
              u.name, u.email, <span key={u.id} className="badge bg-primary/10 text-primary capitalize">{u.role}</span>, u.savedJobs.length,
              <RowActions key={u.id} editHref="#" onDelete={() => {}} />,
            ])}
          />
        )}
      </div>
    </div>
  )
}

function Table({ head, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase text-slate-400">
          <tr>
            {head.map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
              {row.map((cell, j) => <td key={j} className="px-4 py-3">{cell}</td>)}
            </tr>
          ))}
          {rows.length === 0 && (
            <tr><td colSpan={head.length} className="px-4 py-10 text-center text-slate-400">No records found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function RowActions({ editHref, onDelete }) {
  return (
    <div className="flex items-center gap-2">
      <Link to={editHref} className="rounded-lg p-1.5 text-slate-400 hover:bg-primary/10 hover:text-primary"><Pencil size={15} /></Link>
      <button onClick={onDelete} className="rounded-lg p-1.5 text-slate-400 hover:bg-danger/10 hover:text-danger"><Trash2 size={15} /></button>
    </div>
  )
}
