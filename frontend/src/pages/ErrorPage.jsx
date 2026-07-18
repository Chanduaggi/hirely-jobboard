import { RefreshCcw, AlertTriangle } from 'lucide-react'

export default function ErrorPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-lg flex-col items-center justify-center px-4 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-danger/10 text-danger">
        <AlertTriangle size={32} />
      </span>
      <h1 className="mt-6 text-2xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        We couldn't load this page. This is usually temporary — try again in a moment.
      </p>
      <button onClick={() => window.location.reload()} className="btn-primary mt-6">
        <RefreshCcw size={15} /> Retry
      </button>
    </div>
  )
}
