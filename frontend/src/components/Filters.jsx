import { Search, RotateCcw } from 'lucide-react'

const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship']
const experienceLevels = ['0-1 yrs', '1-3 yrs', '2-4 yrs', '3-5 yrs', '4-6 yrs', '6+ yrs']
const workModes = ['Remote', 'Hybrid', 'Onsite']

export default function Filters({ filters, setFilters, onReset }) {
  const toggle = (key, value) => {
    setFilters((prev) => {
      const list = prev[key]
      return { ...prev, [key]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value] }
    })
  }

  return (
    <aside className="card h-fit space-y-6 p-5">
      <div>
        <label className="mb-2 block text-sm font-semibold">Search</label>
        <div className="relative">
          
          <input
            className="input-field pl-9"
            placeholder="Job title, company, keyword"
            value={filters.query}
            onChange={(e) => setFilters((p) => ({ ...p, query: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">Location</label>
        <input
          className="input-field"
          placeholder="City or 'Remote'"
          value={filters.location}
          onChange={(e) => setFilters((p) => ({ ...p, location: e.target.value }))}
        />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">Employment Type</legend>
        <div className="space-y-2">
          {employmentTypes.map((t) => (
            <label key={t} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                checked={filters.type.includes(t)}
                onChange={() => toggle('type', t)}
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">Experience Level</legend>
        <div className="space-y-2">
          {experienceLevels.map((t) => (
            <label key={t} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                checked={filters.experience.includes(t)}
                onChange={() => toggle('experience', t)}
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold">Work Mode</legend>
        <div className="flex flex-wrap gap-2">
          {workModes.map((t) => (
            <button
              key={t}
              onClick={() => toggle('remote', t)}
              className={`badge border transition-colors ${
                filters.remote.includes(t)
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="mb-2 block text-sm font-semibold">
          Min. Salary: ₹{filters.minSalary}L
        </label>
        <input
          type="range"
          min="0"
          max="50"
          step="1"
          value={filters.minSalary}
          onChange={(e) => setFilters((p) => ({ ...p, minSalary: Number(e.target.value) }))}
          className="w-full accent-primary"
        />
      </div>

      <button onClick={onReset} className="btn-secondary w-full">
        <RotateCcw size={15} /> Reset Filters
      </button>
    </aside>
  )
}
