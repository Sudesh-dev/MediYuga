import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { Stethoscope, Bell, User, Mic, Sun, Moon } from 'lucide-react'
import Landing from '@/pages/Landing'
import PatientDashboard from '@/pages/patient/Dashboard'
import DoctorDashboard from '@/pages/doctor/Dashboard'
import FindDoctors from '@/pages/patient/FindDoctors'
import Booking from '@/pages/patient/Booking'
import Records from '@/pages/patient/Records'
import Notifications from '@/pages/shared/Notifications'
import ProfileSettings from '@/pages/shared/ProfileSettings'
import QueueTracking from '@/pages/patient/QueueTracking'
import { useEffect, useState } from 'react'

function Header() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo.png" alt="MediYuga" className="h-8 w-8" />
          <span>MediYuga</span>
        </Link>
        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-brand-blue">Home</Link>
          <Link to="/patient" className="hover:text-brand-blue">Patient</Link>
          <Link to="/doctor" className="hover:text-brand-blue">Doctor</Link>
        </nav>
        <div className="ml-auto md:ml-6 flex items-center gap-2">
          <button aria-label="Voice" className="btn-outline" title="Voice commands coming soon">
            <Mic size={18} />
          </button>
          <Link to="/notifications" className="btn-outline" aria-label="Notifications">
            <Bell size={18} />
          </Link>
          <Link to="/profile" className="btn-outline" aria-label="Profile">
            <User size={18} />
          </Link>
          <button onClick={() => setDark(v => !v)} className="btn-outline" aria-label="Theme toggle">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-semibold mb-2">
            <img src="/logo.png" className="h-6 w-6" />
            <span>MediYuga</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400">Transforming Healthcare into an Intelligent, Transparent, Patient-Centric Ecosystem.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Features</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li>Doctor Trust Index</li>
            <li>Smart Queue</li>
            <li>Affordability Matching</li>
            <li>Geo-Smart Finder</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-slate-600 dark:text-slate-400">support@mediyuga.in</p>
          <div className="mt-3 flex gap-2">
            <a className="btn-outline" href="#">Twitter</a>
            <a className="btn-outline" href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} MediYuga</div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/patient/find" element={<FindDoctors />} />
          <Route path="/patient/booking" element={<Booking />} />
          <Route path="/patient/records" element={<Records />} />
          <Route path="/patient/queue" element={<QueueTracking />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <a href="/patient" className="fixed bottom-4 left-4 btn-primary md:hidden">
        <Stethoscope size={18} /> Patient
      </a>
      <a href="/doctor" className="fixed bottom-4 right-4 btn-outline md:hidden">Doctor</a>
    </div>
  )
}
