import { notifications } from '@/mock/data'

export default function Notifications() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="space-y-3">
        {notifications.map(n => (
          <div key={n.id} className={`card p-4 border-l-4 ${n.type==='queue' ? 'border-brand-blue' : n.type==='cancel' ? 'border-trust-low' : 'border-slate-300 dark:border-slate-700'}`}>
            <div className="font-semibold">{n.title}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">{n.message}</div>
            <div className="text-xs text-slate-500 mt-1">{n.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
