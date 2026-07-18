import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Briefcase, Mail, Lock, User } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-toastify';

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    await register({
      name,
      email,
      password
    })

    toast.success("🎉 Registration Successful!");

    setTimeout(() => {
      navigate("/login");
    }, 1500);

    navigate("/")
  } catch (err) {
    toast.error(err.response?.data?.message || "Registration failed");
  }
}

  return (
    <div className="grid min-h-[calc(100vh-73px)] grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden items-center justify-center bg-gradient-to-br from-secondary to-primary lg:flex">
        <svg viewBox="0 0 400 400" className="w-2/3 max-w-md text-white/90" fill="none">
          <rect x="80" y="90" width="240" height="220" rx="20" fill="white" fillOpacity="0.12" />
          <circle cx="200" cy="170" r="45" fill="white" fillOpacity="0.9" />
          <rect x="130" y="240" width="140" height="12" rx="6" fill="white" fillOpacity="0.5" />
          <rect x="150" y="262" width="100" height="10" rx="5" fill="white" fillOpacity="0.35" />
        </svg>
      </div>

      <div className="flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm">
          <Link to="/" className="mb-8 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white"><Briefcase size={18} /></span>
            <span className="text-lg font-extrabold">Hirely</span>
          </Link>
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">It takes less than a minute.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Full Name</label>
              <div className="relative">
                
                <input required value={name} onChange={(e) => setName(e.target.value)} className="input-field pl-9" placeholder="Chandu Reddy" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <div className="relative">
                
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="input-field pl-9" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Password</label>
              <div className="relative">
                
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="input-field pl-9" placeholder="Create a password" />
              </div>
            </div>
            <button type="submit" className="btn-primary w-full">Register</button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Already have an account? <Link to="/login" className="font-semibold text-primary hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
