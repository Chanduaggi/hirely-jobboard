import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Briefcase, Menu, X, Sun, Moon, Bookmark, User, LayoutDashboard } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-soft">
            <Briefcase size={18} />
          </span>
          <span className="text-lg font-extrabold tracking-tight">Hirely</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/jobs" className={navLinkClass}>Find Jobs</NavLink>
          <NavLink to="/saved" className={navLinkClass}>Saved Jobs</NavLink>
          {user?.role === 'admin' && <NavLink to="/admin" className={navLinkClass}>Admin</NavLink>}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {user ? (
            <>
              <Link to="/saved" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" aria-label="Saved jobs">
                <Bookmark size={18} />
              </Link>
              <Link to="/profile" className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800">
                <User size={16} /> {user.name.split(' ')[0]}
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-secondary !px-4 !py-2">Log in</Link>
              <Link to="/register" className="btn-primary !px-4 !py-2">Post / Apply</Link>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 dark:border-slate-800 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavLink to="/" className={navLinkClass} end onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/jobs" className={navLinkClass} onClick={() => setOpen(false)}>Find Jobs</NavLink>
            <NavLink to="/saved" className={navLinkClass} onClick={() => setOpen(false)}>Saved Jobs</NavLink>
            {user?.role === 'admin' && (
              <NavLink to="/admin" className={navLinkClass} onClick={() => setOpen(false)}>
                <span className="inline-flex items-center gap-1"><LayoutDashboard size={14}/> Admin</span>
              </NavLink>
            )}
            <div className="flex items-center gap-3 pt-2">
              {user ? (
                <button
                  className="btn-secondary flex-1"
                  onClick={() => { logout(); setOpen(false); navigate('/') }}
                >
                  Log out
                </button>
              ) : (
                <>
                  <Link to="/login" className="btn-secondary flex-1" onClick={() => setOpen(false)}>Log in</Link>
                  <Link to="/register" className="btn-primary flex-1" onClick={() => setOpen(false)}>Register</Link>
                </>
              )}
              <button onClick={toggleTheme} className="rounded-lg border border-slate-200 dark:border-slate-700 p-2.5" aria-label="Toggle dark mode">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
