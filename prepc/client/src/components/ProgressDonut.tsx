import React from 'react'

type ProgressDonutProps = {
  value: number // 0-100
  size?: number
  strokeWidth?: number
  from?: string
  to?: string
  label?: string
}

export function ProgressDonut({
  value,
  size = 120,
  strokeWidth = 12,
  from = '#4f46e5', // indigo-600
  to = '#9333ea', // purple-600
  label,
}: ProgressDonutProps) {
  const clamped = Math.max(0, Math.min(100, value))
  const radius = (size - strokeWidth) / 2
  const center = size / 2
  const circumference = 2 * Math.PI * radius
  const progress = (clamped / 100) * circumference
  const remainder = circumference - progress
  const gradientId = React.useId()

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="soft-shadow">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>

        {/* track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(17,24,39,0.08)"
          strokeWidth={strokeWidth}
        />
        {/* segmented ticks */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(17,24,39,0.15)"
          strokeWidth={2}
          strokeDasharray="2 10"
          transform={`rotate(-90 ${center} ${center})`}
        />
        {/* progress */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${progress} ${remainder}`}
          transform={`rotate(-90 ${center} ${center})`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fontWeight={800}
          fontSize={Math.round(size * 0.2)}
          fill="#111827"
        >
          {clamped}%
        </text>
      </svg>
      {label && <div className="mt-2 text-sm font-medium text-gray-700">{label}</div>}
    </div>
  )
}


