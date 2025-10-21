import { useState } from 'react'

export default function Booking() {
  const [step, setStep] = useState(1)
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Book Appointment</h1>
      <div className="card p-5">
        <div className="flex items-center gap-2 text-sm mb-4">
          {[1,2,3,4,5,6].map(s => (
            <div key={s} className={`flex-1 h-2 rounded-full ${s<=step ? 'bg-brand-blue' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
          ))}
        </div>
        {step === 1 && (
          <div className="space-y-3">
            <div className="font-semibold">Step 1: Select date & time</div>
            <input type="date" className="border rounded-lg px-3 py-2 bg-transparent"/>
            <select className="border rounded-lg px-3 py-2 bg-transparent"><option>10:00 AM</option><option>10:30 AM</option></select>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-3">
            <div className="font-semibold">Step 2: Consultation type</div>
            <select className="border rounded-lg px-3 py-2 bg-transparent"><option>First visit</option><option>Follow-up</option><option>Emergency</option></select>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-3">
            <div className="font-semibold">Step 3: Patient details</div>
            <input placeholder="Full name" className="border rounded-lg px-3 py-2 bg-transparent"/>
            <input placeholder="Phone" className="border rounded-lg px-3 py-2 bg-transparent"/>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-3">
            <div className="font-semibold">Step 4: Mode</div>
            <select className="border rounded-lg px-3 py-2 bg-transparent"><option>In-clinic</option><option>Tele-consultation</option></select>
          </div>
        )}
        {step === 5 && (
          <div className="space-y-3">
            <div className="font-semibold">Step 5: Affordability</div>
            <input type="range" min={0} max={5000} className="w-full"/>
          </div>
        )}
        {step === 6 && (
          <div className="space-y-3">
            <div className="font-semibold">Step 6: Review & confirm</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Appointment details summary...</div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg text-center">QR Code • Token #15 (mock)</div>
          </div>
        )}

        <div className="mt-5 flex justify-between">
          <button className="btn-outline" onClick={() => setStep(s => Math.max(1, s-1))}>Back</button>
          <button className="btn-primary" onClick={() => setStep(s => Math.min(6, s+1))}>{step===6? 'Finish' : 'Next'}</button>
        </div>
      </div>
    </div>
  )
}
