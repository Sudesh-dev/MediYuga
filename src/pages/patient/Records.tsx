import { patient } from '@/mock/data'

export default function Records() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold">Medical Records</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-5">
          <div className="font-semibold mb-2">Prescriptions</div>
          <div className="space-y-3 max-h-80 overflow-auto">
            {patient.prescriptions.map(rx => (
              <div key={rx.id} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="text-sm font-medium">{rx.date} • {rx.doctor}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{rx.diagnosis}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card p-5">
          <div className="font-semibold mb-2">Billing History</div>
          <div className="space-y-3 max-h-80 overflow-auto">
            {patient.billings.map(b => (
              <div key={b.id} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="text-sm">{b.date} • {b.doctor}</div>
                <div className="font-semibold">₹{b.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
