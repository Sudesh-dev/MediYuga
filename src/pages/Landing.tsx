import { Link } from 'react-router-dom'
import { Activity, CheckCircle2, Gauge, ShieldCheck, Users } from 'lucide-react'

export default function Landing() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-4">
            <ShieldCheck size={16}/> Trust. Transparency. Affordability.
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Redefining Healthcare Access in India</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-prose">MediYuga combines AI-driven queue prediction, the Doctor Trust Index, and affordability matching to deliver timely, ethical, and accessible care.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/patient" className="btn-primary">Patient Login</Link>
            <Link to="/doctor" className="btn-outline">Doctor Login</Link>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="card p-4"><div className="text-2xl font-bold">60%</div><div className="text-xs text-slate-600 dark:text-slate-400">Reduced wait times</div></div>
            <div className="card p-4"><div className="text-2xl font-bold">100%</div><div className="text-xs text-slate-600 dark:text-slate-400">Transparent ratings</div></div>
            <div className="card p-4"><div className="text-2xl font-bold">Smart</div><div className="text-xs text-slate-600 dark:text-slate-400">Affordability matching</div></div>
          </div>
        </div>
        <div className="relative">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-3"><Gauge className="text-brand-blue"/> <span className="font-semibold">Queue Predictor</span></div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-brand-blue animate-pulse"></div>
            </div>
            <p className="text-sm mt-3 text-slate-600 dark:text-slate-400">Estimated wait time: ~18 mins. Next patient soon.</p>
          </div>
          <div className="absolute -bottom-6 -left-6 card p-4 hidden md:block">
            <div className="flex items-center gap-2"><CheckCircle2 className="text-trust-high"/> Ethical prescriptions</div>
          </div>
          <div className="absolute -top-6 -right-6 card p-4 hidden md:block">
            <div className="flex items-center gap-2"><Activity className="text-trust-medium"/> Billing consistency</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title:'Predictive Queue AI', desc:'Live countdowns and smart notifications.'},
            {title:'Doctor Trust Index', desc:'Transparent, verifiable trust metrics.'},
            {title:'Affordability Matching', desc:'Find care within your budget.'},
            {title:'Geo-Smart Finder', desc:'Best route considering traffic & queues.'},
            {title:'Transparent Ratings', desc:'Verified patient feedback only.'},
            {title:'Patient-Centric', desc:'Simple, modern, and accessible.'},
          ].map((f) => (
            <div key={f.title} className="card p-5">
              <div className="font-semibold mb-1">{f.title}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">What people say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="card p-5">
              <div className="font-semibold mb-1">“Amazing experience”</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Waited less, knew fees upfront, and got ethical care.</div>
              <div className="mt-3 text-xs text-slate-500">Verified Patient</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
