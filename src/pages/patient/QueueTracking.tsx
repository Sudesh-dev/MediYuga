export default function QueueTracking() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Queue Tracking</h1>
      <div className="card p-6">
        <div className="text-5xl font-extrabold">Token #15</div>
        <div className="text-slate-600 dark:text-slate-400">Current serving: #12</div>
        <div className="mt-4 h-3 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-brand-blue animate-pulse"></div>
        </div>
        <div className="mt-2 text-sm">Estimated wait: ~18 mins • 12 patients ahead</div>
        <div className="mt-4 flex gap-2">
          <button className="btn-outline">Notify me</button>
          <button className="btn-outline">Reschedule</button>
          <button className="btn-outline">Cancel</button>
        </div>
      </div>
    </div>
  )
}
