import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Briefcase, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState('chandu@example.com')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await login({
      email,
      password,
    });

    toast.success("🎉 Login Successful!");

    setTimeout(() => {
      navigate("/");
    }, 1000);


    navigate("/");
  } catch (err) {
    toast.error(err.response?.data?.message || "Invalid email or password");
  }
};

  return (
    <div className="grid min-h-[calc(100vh-73px)] grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm">
          <Link to="/" className="mb-8 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white"><Briefcase size={18} /></span>
            <span className="text-lg font-extrabold">Hirely</span>
          </Link>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Log in to continue your job search.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <div className="relative">
                
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="input-field pl-9" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Password</label>
              <div className="relative">
                
                <input type={showPw ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} className="input-field pl-9 pr-9" placeholder="••••••••" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary" /> Remember me
              </label>
              <a href="#" className="text-primary hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="btn-primary w-full">Log In</button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account? <Link to="/register" className="font-semibold text-primary hover:underline">Register</Link>
          </p>
        </div>
      </div>

      <div className="relative hidden items-center justify-center bg-gradient-to-br from-primary to-secondary lg:flex">
        <svg viewBox="0 0 400 400" className="w-2/3 max-w-md text-white/90" fill="none">
          <circle cx="200" cy="140" r="70" fill="white" fillOpacity="0.12" />
          <rect x="90" y="220" width="220" height="120" rx="16" fill="white" fillOpacity="0.15" />
          <rect x="120" y="245" width="160" height="14" rx="7" fill="white" fillOpacity="0.5" />
          <rect x="120" y="270" width="110" height="10" rx="5" fill="white" fillOpacity="0.35" />
          <rect x="120" y="290" width="140" height="10" rx="5" fill="white" fillOpacity="0.35" />
          <circle cx="200" cy="140" r="40" fill="white" fillOpacity="0.9" />
        </svg>
      </div>
    </div>
  )
}
