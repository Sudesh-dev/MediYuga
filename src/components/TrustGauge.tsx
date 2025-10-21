import React from 'react'

export default function TrustGauge({ score }: { score: number }) {
  const color = score >= 80 ? 'text-trust-high' : score >= 60 ? 'text-trust-medium' : 'text-trust-low'
  return (
    <div className="flex items-center gap-3">
      <div className={`relative h-14 w-14 rounded-full bg-slate-100 dark:bg-slate-800 grid place-items-center ${color}`}>
        <span className="text-lg font-bold">{score}</span>
        <svg className="absolute inset-0" viewBox="0 0 36 36">
          <path className="stroke-current opacity-20" d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0 -32" fill="none" strokeWidth="4"/>
          <path className="stroke-current" d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0 -32" fill="none" strokeWidth="4" strokeDasharray={`${(score/100)*100},100`} />
        </svg>
      </div>
      <div className="text-sm">
        <div className="font-semibold">Doctor Trust Index</div>
        <div className="text-slate-600 dark:text-slate-400">Billing, Ethics, Feedback</div>
      </div>
    </div>
  )
}
