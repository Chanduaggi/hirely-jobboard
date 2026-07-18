import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Save } from 'lucide-react'
import { jobs, companies } from '../data/mockData'

const empty = {
  title: '', company: '', salary: '', type: 'Full-time', experience: '', location: '',
  skills: '', description: '', responsibilities: '', benefits: '', website: '',
}

export default function JobForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const existing = id ? jobs.find((j) => j.id === id) : null

  const [form, setForm] = useState(
    existing
      ? {
          title: existing.title, company: existing.company, salary: existing.salary, type: existing.type,
          experience: existing.experience, location: existing.location, skills: existing.skills.join(', '),
          description: existing.description, responsibilities: existing.responsibilities.join('\n'),
          benefits: existing.benefits.join(', '), website: companies.find((c) => c.id === existing.companyId)?.website || '',
        }
      : empty,
  )

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/admin')
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">{existing ? 'Edit Job' : 'Add New Job'}</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Fill in the details below to {existing ? 'update the' : 'publish a new'} listing.</p>

      <form onSubmit={handleSubmit} className="card mt-6 space-y-5 p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Job Title" required><input required className="input-field" value={form.title} onChange={set('title')} placeholder="e.g. Senior Frontend Engineer" /></Field>
          <Field label="Company" required><input required className="input-field" value={form.company} onChange={set('company')} placeholder="e.g. Nimbus Cloud" /></Field>
          <Field label="Salary" required><input required className="input-field" value={form.salary} onChange={set('salary')} placeholder="e.g. ₹20L - ₹30L" /></Field>
          <Field label="Employment Type" required>
            <select className="input-field" value={form.type} onChange={set('type')}>
              {['Full-time', 'Part-time', 'Contract', 'Internship'].map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>
          <Field label="Experience" required><input required className="input-field" value={form.experience} onChange={set('experience')} placeholder="e.g. 2-4 yrs" /></Field>
          <Field label="Location" required><input required className="input-field" value={form.location} onChange={set('location')} placeholder="e.g. Hyderabad, India" /></Field>
        </div>

        <Field label="Skills (comma separated)"><input className="input-field" value={form.skills} onChange={set('skills')} placeholder="React, TypeScript, GraphQL" /></Field>
        <Field label="Description" required><textarea required rows={4} className="input-field" value={form.description} onChange={set('description')} /></Field>
        <Field label="Responsibilities (one per line)"><textarea rows={4} className="input-field" value={form.responsibilities} onChange={set('responsibilities')} /></Field>
        <Field label="Benefits (comma separated)"><input className="input-field" value={form.benefits} onChange={set('benefits')} placeholder="Health insurance, ESOPs" /></Field>
        <Field label="Company Website"><input type="url" className="input-field" value={form.website} onChange={set('website')} placeholder="https://company.example.com" /></Field>

        <div className="flex justify-end gap-3 pt-2">
          <button type="button" onClick={() => navigate('/admin')} className="btn-secondary">Cancel</button>
          <button type="submit" className="btn-primary"><Save size={15} /> {existing ? 'Save Changes' : 'Publish Job'}</button>
        </div>
      </form>
    </div>
  )
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}{required && <span className="text-danger"> *</span>}</label>
      {children}
    </div>
  )
}
