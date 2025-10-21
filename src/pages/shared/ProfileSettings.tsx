export default function ProfileSettings() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold">Profile & Settings</h1>
      <div className="card p-5 space-y-3">
        <div className="font-semibold">Profile</div>
        <input placeholder="Name" className="border rounded-lg px-3 py-2 bg-transparent"/>
        <div className="grid grid-cols-2 gap-3">
          <input placeholder="Age" className="border rounded-lg px-3 py-2 bg-transparent"/>
          <input placeholder="Gender" className="border rounded-lg px-3 py-2 bg-transparent"/>
        </div>
        <input placeholder="Emergency contact" className="border rounded-lg px-3 py-2 bg-transparent"/>
      </div>
      <div className="card p-5 space-y-3">
        <div className="font-semibold">Settings</div>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox"/> Notify about queue updates</label>
        <select className="border rounded-lg px-3 py-2 bg-transparent text-sm"><option>English</option><option>हिन्दी</option><option>தமிழ்</option></select>
      </div>
    </div>
  )
}
