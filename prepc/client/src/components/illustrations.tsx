import React from 'react'

function defsWithGradientAndShadow(gradientId: string, a: string, b: string, shadowId: string) {
  return (
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={a} />
        <stop offset="100%" stopColor={b} />
      </linearGradient>
      <filter id={shadowId} x="-50%" y="-50%" width="200%" height="200%">
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0.18 0" />
        <feBlend in2="SourceGraphic" mode="normal" />
      </filter>
    </defs>
  )
}

export const IlloPortfolio: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId()
  const gid = gradientId || id
  const sid = `${gid}-shadow`
  return (
    <svg width="92" height="92" viewBox="0 0 92 92" aria-hidden>
      {defsWithGradientAndShadow(gid, '#4f46e5', '#9333ea', sid)}
      {/* case */}
      <rect x="10" y="26" width="72" height="44" rx="14" fill="#ffffff" filter={`url(#${sid})`} />
      <rect x="10" y="26" width="72" height="44" rx="14" fill="none" stroke={`url(#${gid})`} strokeWidth="2" />
      {/* handle */}
      <rect x="29" y="18" width="34" height="12" rx="6" fill={`url(#${gid})`} />
      {/* papers */}
      <rect x="18" y="36" width="56" height="8" rx="4" fill="#eef2ff" />
      <rect x="18" y="48" width="34" height="8" rx="4" fill="#eef2ff" />
      <rect x="18" y="60" width="22" height="6" rx="3" fill={`url(#${gid})`} opacity="0.6" />
    </svg>
  )
}

export const IlloGrowth: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id; const sid = `${gid}-shadow`
  return (
    <svg width="92" height="92" viewBox="0 0 92 92" aria-hidden>
      {defsWithGradientAndShadow(gid, '#22c55e', '#06b6d4', sid)}
      <rect x="12" y="16" width="68" height="56" rx="12" fill="#ffffff" filter={`url(#${sid})`} />
      <rect x="12" y="16" width="68" height="56" rx="12" fill="none" stroke={`url(#${gid})`} strokeWidth="2" />
      {/* grid */}
      <g stroke="#E5E7EB">
        <path d="M24 28H76" />
        <path d="M24 40H76" />
        <path d="M24 52H76" />
        <path d="M36 28V72" />
        <path d="M48 28V72" />
        <path d="M60 28V72" />
      </g>
      {/* trend line */}
      <path d="M24 62 L38 48 L50 52 L72 32" fill="none" stroke={`url(#${gid})`} strokeWidth="4" strokeLinecap="round" />
      <circle cx="72" cy="32" r="5" fill={`url(#${gid})`} />
    </svg>
  )
}

export const IlloCV: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id; const sid = `${gid}-shadow`
  return (
    <svg width="92" height="92" viewBox="0 0 92 92" aria-hidden>
      {defsWithGradientAndShadow(gid, '#f97316', '#f43f5e', sid)}
      <rect x="22" y="14" width="48" height="64" rx="10" fill="#ffffff" filter={`url(#${sid})`} />
      <rect x="22" y="14" width="48" height="64" rx="10" fill="none" stroke={`url(#${gid})`} strokeWidth="2" />
      <circle cx="32" cy="32" r="7" fill={`url(#${gid})`} opacity="0.9" />
      <rect x="44" y="26" width="18" height="4" rx="2" fill="#FFD1D9" />
      <rect x="44" y="34" width="18" height="4" rx="2" fill="#FFD1D9" />
      <rect x="24" y="48" width="42" height="6" rx="3" fill="#FFE4E6" />
      <rect x="24" y="58" width="30" height="6" rx="3" className="accent" fill={`url(#${gid})`} opacity="0.8" />
    </svg>
  )
}

export const IlloDashboard: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id; const sid = `${gid}-shadow`
  return (
    <svg width="92" height="92" viewBox="0 0 92 92" aria-hidden>
      {defsWithGradientAndShadow(gid, '#8b5cf6', '#22d3ee', sid)}
      <rect x="14" y="20" width="64" height="48" rx="12" fill="#ffffff" filter={`url(#${sid})`} />
      <rect x="14" y="20" width="64" height="48" rx="12" fill="none" stroke={`url(#${gid})`} strokeWidth="2" />
      <rect x="20" y="26" width="20" height="14" rx="5" fill={`url(#${gid})`} />
      <rect x="44" y="26" width="26" height="14" rx="5" fill="#EEF2FF" />
      <rect x="20" y="46" width="50" height="16" rx="8" fill="#EEF2FF" />
      {/* sparkline */}
      <path d="M24 54 L34 50 L42 52 L50 48 L62 50" fill="none" stroke={`url(#${gid})`} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export const IlloStudents: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id; const sid = `${gid}-shadow`
  return (
    <svg width="108" height="108" viewBox="0 0 108 108" aria-hidden>
      {defsWithGradientAndShadow(gid, '#4f46e5', '#22d3ee', sid)}
      {/* brighter, tinted backdrop for better visibility */}
      <circle cx="54" cy="54" r="48" fill="#F0F7FF" stroke={`url(#${gid})`} strokeWidth="2" filter={`url(#${sid})`} />
      {/* cap */}
      <polygon points="54,24 78,32 54,40 30,32" fill={`url(#${gid})`} opacity="0.9" />
      {/* tassel */}
      <path d="M72 32 v10" stroke={`url(#${gid})`} strokeWidth="2" />
      <circle cx="72" cy="44" r="2.5" fill={`url(#${gid})`} />
      {/* head and shoulders */}
      <circle cx="54" cy="48" r="11" fill="#CBD5E1" />
      <rect x="34" y="60" width="40" height="18" rx="9" fill="#CBD5E1" />
      {/* book accent */}
      <rect x="64" y="36" width="18" height="24" rx="3" className="accent" fill={`url(#${gid})`} opacity="0.85" />
      <rect x="66" y="40" width="12" height="2" rx="1" fill="#fff" opacity="0.85" />
    </svg>
  )
}

export const IlloSchools: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id; const sid = `${gid}-shadow`
  return (
    <svg width="108" height="108" viewBox="0 0 108 108" aria-hidden>
      {defsWithGradientAndShadow(gid, '#9333ea', '#f59e0b', sid)}
      {/* circular badge backdrop with subtle tint */}
      <circle cx="54" cy="54" r="48" fill="#FFF3EA" stroke={`url(#${gid})`} strokeWidth="2.2" filter={`url(#${sid})`} />
      {/* premium school building */}
      {/* flag */}
      <path d="M74 36 v12" stroke={`url(#${gid})`} strokeWidth="2" />
      <path d="M74 36 h8 l-3 4 3 4 h-8 z" fill={`url(#${gid})`} opacity="0.9" />
      {/* roof */}
      <polygon points="54,38 82,50 26,50" fill="#F1E8FF" stroke={`url(#${gid})`} strokeWidth="1" />
      {/* facade */}
      <rect x="30" y="50" width="48" height="26" rx="8" fill="#ffffff" stroke={`url(#${gid})`} strokeWidth="1.6" />
      {/* windows */}
      <rect x="36" y="56" width="8" height="8" rx="2" fill="#DBEAFE" />
      <rect x="50" y="56" width="8" height="8" rx="2" fill="#DBEAFE" />
      <rect x="64" y="56" width="8" height="8" rx="2" fill="#DBEAFE" />
      {/* door and steps */}
      <rect x="50" y="66" width="8" height="10" rx="2" fill="#FCD34D" />
      <rect x="46" y="76" width="16" height="2" rx="1" fill="#FDE68A" />
      {/* bushes */}
      <ellipse cx="30" cy="76" rx="6" ry="4" fill="#D1FAE5" />
      <ellipse cx="78" cy="76" rx="6" ry="4" fill="#D1FAE5" />
    </svg>
  )
}

// --- Pillar illustrations (mute by default, colorize on hover via .accent) ---
export const PillarExtracurriculars: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden>
      {defsWithGradientAndShadow(gid, '#22c55e', '#06b6d4', `${gid}-shadow`)}
      {/* group activity: three people with sparkles */}
      {/* center person */}
      <circle cx="44" cy="36" r="8" fill="#D1FAE5" />
      <rect x="36" y="46" width="16" height="12" rx="6" fill="#D1FAE5" />
      {/* left person */}
      <circle cx="30" cy="40" r="6" fill="#ECFDF5" />
      <rect x="24" y="48" width="12" height="10" rx="5" fill="#ECFDF5" />
      {/* right person */}
      <circle cx="58" cy="40" r="6" fill="#ECFDF5" />
      <rect x="52" y="48" width="12" height="10" rx="5" fill="#ECFDF5" />
      {/* sparkles */}
      <path d="M44 22 l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill={`url(#${gid})`} opacity="0.85" />
      <circle cx="28" cy="28" r="2" fill="#A7F3D0" />
      <circle cx="64" cy="30" r="2" fill="#93C5FD" />
    </svg>
  )
}

export const PillarHonors: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden>
      {defsWithGradientAndShadow(gid, '#f97316', '#f43f5e', `${gid}-shadow`)}
      {/* medal */}
      <circle cx="44" cy="38" r="16" fill="#FFEAD5" stroke={`url(#${gid})`} strokeWidth="2" />
      {/* star */}
      <path d="M44 30 l3 6 7 1-5 4 2 7-7-3-7 3 2-7-5-4 7-1z" fill="#FDBA74" />
      {/* ribbons */}
      <path d="M38 50 l-6 12 10-4 4 6 4-6 10 4-6-12" fill={`url(#${gid})`} opacity="0.9" />
    </svg>
  )
}

export const PillarVolunteering: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden>
      {defsWithGradientAndShadow(gid, '#10b981', '#14b8a6', `${gid}-shadow`)}
      {/* hands */}
      <path d="M24 54c0 8 10 12 16 8l4-2" fill="#DCFCE7" />
      <path d="M64 54c0 8-10 12-16 8l-4-2" fill="#DCFCE7" />
      {/* heart */}
      <path d="M44 40c-4-6-14-2-12 5 1 4 6 7 12 12 6-5 11-8 12-12 2-7-8-11-12-5z" fill={`url(#${gid})`} opacity="0.9" />
    </svg>
  )
}

export const PillarTests: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden>
      {defsWithGradientAndShadow(gid, '#60a5fa', '#a78bfa', `${gid}-shadow`)}
      {/* paper */}
      <rect x="26" y="22" width="36" height="44" rx="6" fill="#ffffff" stroke="#E5E7EB" />
      <rect x="30" y="26" width="24" height="4" rx="2" fill={`url(#${gid})`} opacity="0.8" />
      {/* checklist lines */}
      <rect x="30" y="34" width="18" height="3" rx="1.5" fill="#E5E7EB" />
      <rect x="30" y="42" width="18" height="3" rx="1.5" fill="#E5E7EB" />
      <rect x="30" y="50" width="18" height="3" rx="1.5" fill="#E5E7EB" />
      {/* checks */}
      <path d="M54 35 l3 3 6-6" stroke={`url(#${gid})`} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M54 43 l3 3 6-6" stroke={`url(#${gid})`} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M54 51 l3 3 6-6" stroke={`url(#${gid})`} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

// ---- Outcome/stat icons ----
export const IconMoney: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id; const sid = `${gid}-shadow`
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden>
      {defsWithGradientAndShadow(gid, '#22c55e', '#06b6d4', sid)}
      <circle cx="28" cy="28" r="24" fill="#ECFDF5" stroke={`url(#${gid})`} strokeWidth="1.8" filter={`url(#${sid})`} />
      <circle cx="28" cy="28" r="14" fill={`url(#${gid})`} opacity="0.9" />
      <text x="28" y="33" fontSize="14" textAnchor="middle" fill="#ffffff" fontFamily="system-ui, -apple-system, Segoe UI, Roboto">$</text>
    </svg>
  )
}

export const IconAcceptance: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id; const sid = `${gid}-shadow`
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden>
      {defsWithGradientAndShadow(gid, '#4f46e5', '#22d3ee', sid)}
      <circle cx="28" cy="28" r="24" fill="#EEF2FF" stroke={`url(#${gid})`} strokeWidth="1.8" filter={`url(#${sid})`} />
      <path d="M18 30 l8 6 12-16" fill="none" stroke={`url(#${gid})`} strokeWidth="4" strokeLinecap="round" />
      <text x="28" y="46" fontSize="10" textAnchor="middle" fill="#64748B" fontFamily="system-ui, -apple-system, Segoe UI, Roboto">x2–x10</text>
    </svg>
  )
}

export const IconPlatform: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id; const sid = `${gid}-shadow`
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden>
      {defsWithGradientAndShadow(gid, '#8b5cf6', '#22d3ee', sid)}
      <circle cx="28" cy="28" r="24" fill="#F5F3FF" stroke={`url(#${gid})`} strokeWidth="1.8" filter={`url(#${sid})`} />
      <rect x="16" y="18" width="24" height="16" rx="4" fill="#ffffff" stroke={`url(#${gid})`} />
      <rect x="20" y="22" width="16" height="4" rx="2" fill="#E9D5FF" />
      <rect x="18" y="36" width="20" height="4" rx="2" fill={`url(#${gid})`} opacity="0.8" />
    </svg>
  )
}

export const IconTime: React.FC<{ gradientId?: string }> = ({ gradientId }) => {
  const id = React.useId(); const gid = gradientId || id; const sid = `${gid}-shadow`
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden>
      {defsWithGradientAndShadow(gid, '#60a5fa', '#a78bfa', sid)}
      <circle cx="28" cy="28" r="24" fill="#EFF6FF" stroke={`url(#${gid})`} strokeWidth="1.8" filter={`url(#${sid})`} />
      {/* clock */}
      <circle cx="28" cy="28" r="10" fill="#ffffff" stroke="#D1D5DB" />
      <path d="M28 24 v6 l4 2" stroke={`url(#${gid})`} strokeWidth="2.5" strokeLinecap="round" />
      {/* magnifier */}
      <circle cx="38" cy="38" r="5" fill="none" stroke={`url(#${gid})`} strokeWidth="2" />
      <line x1="41" y1="41" x2="45" y2="45" stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}


