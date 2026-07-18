import { Link } from 'react-router-dom'
import { Briefcase, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <Briefcase size={18} />
              </span>
              <span className="text-lg font-extrabold">Hirely</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-500 dark:text-slate-400">
              Helping candidates find roles that fit, and companies find people who deliver.
            </p>
            <div className="mt-4 flex gap-3 text-slate-400">
              <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin size={18} /></a>
              <a href="#" aria-label="GitHub" className="hover:text-primary"><Github size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold">For Candidates</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/jobs" className="hover:text-primary">Browse Jobs</Link></li>
              <li><Link to="/saved" className="hover:text-primary">Saved Jobs</Link></li>
              <li><Link to="/profile" className="hover:text-primary">My Profile</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">For Employers</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link to="/admin" className="hover:text-primary">Admin Dashboard</Link></li>
              <li><Link to="/admin/jobs/new" className="hover:text-primary">Post a Job</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary">About</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-100 dark:border-slate-800 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} Hirely. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
