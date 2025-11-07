import { motion } from 'framer-motion'
import React from 'react'

type FeatureCardProps = {
  title: string
  desc: string
  Illustration: React.ComponentType<{ gradientId?: string }>
}

export function FeatureCard({ title, desc, Illustration }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.5 }}
      className="gradient-hairline rounded-3xl p-1"
    >
      <div className="rounded-3xl glass-card p-6 sm:p-8 flex items-center gap-6 group">
        <motion.div
          className="shrink-0 filter transition duration-300 group-hover:saturate-200 group-hover:brightness-110"
          initial={{ rotate: 0, opacity: 0.95, y: 0 }}
          animate={{ y: [0, -6, 0] }}
          whileHover={{ rotate: 2 }}
          transition={{ duration: 3.2, ease: 'easeInOut', repeat: Infinity }}
        >
          <Illustration />
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </motion.div>
  )
}


