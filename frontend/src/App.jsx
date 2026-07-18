import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import JobsListing from './pages/JobsListing'
import JobDetails from './pages/JobDetails'
import SavedJobs from './pages/SavedJobs'
import Profile from './pages/Profile'
import AdminDashboard from './pages/AdminDashboard'
import JobForm from './pages/JobForm'
import NotFound from './pages/NotFound'
import LoadingDemo from './pages/LoadingDemo'
import ErrorPage from './pages/ErrorPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<JobsListing />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/saved" element={<SavedJobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/jobs/new" element={<JobForm />} />
          <Route path="/admin/jobs/:id/edit" element={<JobForm />} />
          <Route path="/loading-demo" element={<LoadingDemo />} />
          <Route path="/error-demo" element={<ErrorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
