import { Link } from 'react-router-dom'
import TrustGauge from '@/components/TrustGauge'
import { doctors, patient } from '@/mock/data'

export default function PatientDashboard() {
  const primary = doctors[0]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Patient Dashboard</h1>
        <div className="flex gap-2">
          <Link to="/patient/booking" className="btn-primary">Book New Appointment</Link>
          <Link to="/patient/find" className="btn-outline">Find Nearby Clinics</Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-5 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold">Real-Time Queue Status</div>
            <Link to="/patient/queue" className="text-sm text-brand-blue">Open</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-4xl font-bold">Token #15</div>
              <div className="text-slate-600 dark:text-slate-400">You are 3rd in line</div>
              <div className="mt-3 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-brand-blue animate-pulse"></div>
              </div>
              <div className="text-sm mt-2">Estimated wait: ~18 mins</div>
              <div className="text-xs text-slate-500">Doctor is consulting Token #12</div>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
              <div className="font-semibold">{primary.name}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{primary.specialty} • {primary.clinic}</div>
              <div className="mt-3"><TrustGauge score={primary.trust} /></div>
              <div className="mt-3 text-sm">Fee: ₹{primary.fee} • {primary.queue} waiting • ~{primary.waitMins} mins</div>
            </div>
          </div>
        </div>
        <div className="card p-5">
          <div className="font-semibold mb-2">Upcoming Appointment</div>
          <div className="text-sm">
            <div className="font-medium">{patient.upcoming[0].doctor}</div>
            <div className="text-slate-600 dark:text-slate-400">{patient.upcoming[0].date} at {patient.upcoming[0].time}</div>
            <div className="mt-3 flex gap-2">
              <button className="btn-outline">Get Directions</button>
              <button className="btn-outline">Reschedule</button>
              <button className="btn-outline">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-5">
        <div className="font-semibold mb-3">Quick Actions</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
          <Link to="/patient/booking" className="btn-outline">Book New Appointment</Link>
          <Link to="/patient/find" className="btn-outline">Find Nearby Clinics</Link>
          <button className="btn-outline">Emergency Consultation</button>
          <Link to="/patient/records" className="btn-outline">View Medical Records</Link>
        </div>
      </div>
    </div>
  )
}
