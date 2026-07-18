import { useNavigate, Link } from 'react-router-dom'
import { Pencil, LogOut, Bookmark, Mail, UserCircle2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import EmptyState from '../components/EmptyState'

export default function Profile() {
  const { user, logout, savedJobIds } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20">
        <EmptyState
          icon={UserCircle2}
          title="You're not logged in"
          description="Log in to view and edit your candidate profile."
          action={<Link to="/login" className="btn-primary mt-4">Log In</Link>}
        />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="card p-8 text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-4xl font-bold text-primary">
          {user.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
        </div>
        <h1 className="mt-4 text-xl font-bold">{user.name}</h1>
        <p className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <Mail size={14} /> {user.email}
        </p>

        <div className="mt-6 flex justify-center gap-8 border-y border-slate-100 dark:border-slate-800 py-5">
          <div>
            <p className="text-2xl font-bold">{savedJobIds.length}</p>
            <p className="text-xs text-slate-400">Saved Jobs</p>
          </div>
          <div>
            <p className="text-2xl font-bold capitalize">{user.role}</p>
            <p className="text-xs text-slate-400">Account Type</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="btn-secondary flex-1"><Pencil size={15} /> Edit Profile</button>
          <Link to="/saved" className="btn-secondary flex-1"><Bookmark size={15} /> Saved Jobs</Link>
          <button onClick={() => { logout(); navigate('/') }} className="btn-primary flex-1 !bg-danger hover:!bg-red-600">
            <LogOut size={15} /> Logout
          </button>
        </div>
      </div>
    </div>
  )
}
