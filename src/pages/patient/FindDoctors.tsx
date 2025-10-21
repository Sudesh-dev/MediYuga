import TrustGauge from '@/components/TrustGauge'
import { doctors } from '@/mock/data'
import { Link } from 'react-router-dom'

export default function FindDoctors() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Find Doctors & Clinics</h1>
      <div className="card p-4 mb-6 grid md:grid-cols-4 gap-3">
        <input className="border rounded-lg px-3 py-2 bg-transparent" placeholder="Search by specialty, doctor, or location" />
        <select className="border rounded-lg px-3 py-2 bg-transparent"><option>Specialty</option></select>
        <select className="border rounded-lg px-3 py-2 bg-transparent"><option>Trust Score</option></select>
        <select className="border rounded-lg px-3 py-2 bg-transparent"><option>Price Range</option></select>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {doctors.map(doc => (
          <div key={doc.id} className="card p-5 flex gap-4">
            <img src={doc.photo} alt={doc.name} className="h-20 w-20 rounded-lg object-cover"/>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{doc.name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{doc.specialty} • {doc.qualification}</div>
                </div>
                <TrustGauge score={doc.trust} />
              </div>
              <div className="mt-2 text-sm">{doc.clinic} • {doc.distanceKm} km • {doc.queue} waiting • ~{doc.waitMins} mins</div>
              <div className="mt-2 text-sm">Fee: <span className="font-semibold">₹{doc.fee}</span> <span className="ml-2 badge bg-slate-100 dark:bg-slate-800">{'₹'.repeat(doc.affordability)}</span></div>
              <div className="mt-3 flex gap-2">
                <Link to="/patient/booking" className="btn-primary">Book Appointment</Link>
                <button className="btn-outline">View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
