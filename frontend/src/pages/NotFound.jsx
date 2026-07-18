import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-lg flex-col items-center justify-center px-4 text-center">
      <svg viewBox="0 0 240 160" className="w-64 text-primary">
        <rect x="20" y="30" width="200" height="110" rx="14" fill="currentColor" fillOpacity="0.08" />
        <circle cx="80" cy="85" r="14" fill="currentColor" fillOpacity="0.6" />
        <circle cx="160" cy="85" r="14" fill="currentColor" fillOpacity="0.6" />
        <path d="M80 115q40 20 80 0" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.6" />
      </svg>
      <h1 className="mt-6 text-6xl font-extrabold text-secondary dark:text-white">404</h1>
      <p className="mt-2 text-lg font-semibold">This page took a wrong turn</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn-primary mt-6"><Home size={15} /> Back to Home</Link>
    </div>
  )
}
