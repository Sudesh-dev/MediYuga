import TrustGauge from '@/components/TrustGauge'
import { doctors, patient } from '@/mock/data'
import { Users, Activity, Clock, Phone, MessageSquare, ChevronRight } from 'lucide-react'

export default function DoctorDashboard() {
  const me = doctors[1]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <QueueCard />
        <PerformanceCard trust={me.trust} billing={me.billing} ethics={me.ethics} feedback={me.feedback} />
        <QuickStats />
      </div>
      <AppointmentsSection doctorId={me.id} />
      <div className="card p-5">
        <div className="font-semibold mb-2">Appointment Calendar</div>
        <div className="h-40 grid place-items-center text-slate-500 text-sm">Calendar placeholder</div>
      </div>
    </div>
  )
}


function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span>{label}</span>
        <span className="font-medium">{value}</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded">
        <div className="h-2 bg-brand-blue rounded" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
    </div>
  )
}

function QueueCard() {
  const totalBooked = 24
  const servingToken = 12
  const waiting = 8
  const noShow = 1
  return (
    <div className="card p-5 space-y-3">
      <div className="font-semibold">Today's Queue</div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2"><Users size={16} /><span>Total booked: {totalBooked}</span></div>
        <div className="flex items-center gap-2"><Activity size={16} /><span>Serving token: #{servingToken}</span></div>
        <div className="flex items-center gap-2"><Clock size={16} /><span>Waiting: {waiting}</span></div>
        <div className="flex items-center gap-2"><Activity size={16} /><span>No-show: {noShow}</span></div>
      </div>
      <div className="flex gap-2 pt-2">
        <button className="btn-primary">Call Next Patient</button>
        <button className="btn-outline" aria-label="Contact reception"><Phone size={16} /></button>
      </div>
    </div>
  )
}

function PerformanceCard({ trust, billing, ethics, feedback }: { trust: number; billing: number; ethics: number; feedback: number }) {
  return (
    <div className="card p-5 space-y-4">
      <div className="font-semibold">My Performance</div>
      <TrustGauge score={trust} />
      <div className="space-y-3">
        <Bar label="Billing" value={billing} />
        <Bar label="Ethics" value={ethics} />
        <Bar label="Feedback" value={feedback} />
      </div>
    </div>
  )
}

function QuickStats() {
  return (
    <div className="card p-5 space-y-3">
      <div className="font-semibold">Quick Statistics</div>
      <div className="text-sm grid grid-cols-2 gap-3">
        <div>This month: 320 consultations</div>
        <div>Avg wait: 14 mins</div>
        <div>Retention: 72%</div>
        <div>Satisfaction: 4.6/5</div>
      </div>
      <div className="flex gap-2 pt-2">
        <button className="btn-outline flex items-center gap-1 text-sm">View detailed report <ChevronRight size={16} /></button>
        <button className="btn-outline flex items-center gap-1 text-sm"><MessageSquare size={16} /> Feedback</button>
      </div>
    </div>
  )
}

function AppointmentsSection({ doctorId }: { doctorId: string }) {
  const docName = doctors.find(d => d.id === doctorId)?.name
  const todays = patient.upcoming.filter(a => a.doctor === docName).slice(0, 5)
  return (
    <div className="card p-5">
      <div className="font-semibold mb-3">Today's Appointments</div>
      {todays.length === 0 ? (
        <div className="h-24 grid place-items-center text-slate-500 text-sm">No appointments found</div>
      ) : (
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {todays.map((a) => (
            <div key={a.id} className="py-3 flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 grid place-items-center text-slate-600">{a.time.split(':')[0]}</div>
                <div>
                  <div className="font-medium">{a.clinic}</div>
                  <div className="text-slate-600 dark:text-slate-400">{a.date} • {a.time}</div>
                </div>
              </div>
              <button className="btn-outline">Open</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
