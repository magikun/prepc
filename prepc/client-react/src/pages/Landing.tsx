import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const categories = [
  { title: 'Honors', icon: '🏅', to: '/honors', color: 'from-indigo-500 to-purple-500' },
  { title: 'Extracurriculars', icon: '🎭', to: '/extracurriculars', color: 'from-blue-500 to-cyan-500' },
  { title: 'Competitions', icon: '🧠', to: '/competitions', color: 'from-fuchsia-500 to-pink-500' },
  { title: 'Activities', icon: '📌', to: '/activities', color: 'from-emerald-500 to-teal-500' },
  { title: 'Volunteering', icon: '🤝', to: '/volunteering', color: 'from-rose-500 to-orange-500' },
  { title: 'Tests', icon: '🧪', to: '/tests', color: 'from-violet-500 to-indigo-500' },
]

export function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20" aria-hidden>
          <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Build a <span className="gradient-text">Winning University Portfolio</span> with PrepC
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            Centralize your achievements, track progress, and generate a polished CV. PrepC guides students toward a standout admissions profile.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link to="/auth/signup" className="rounded-2xl bg-indigo-600 text-white px-6 py-3 text-sm font-medium hover:bg-indigo-500 soft-shadow">Get Started</Link>
            <Link to="/auth/signup?role=school" className="rounded-2xl border border-indigo-600 text-indigo-600 px-6 py-3 text-sm font-medium hover:bg-indigo-50">Join as a School</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'All-in-one Portfolio', desc: 'Honors, activities, tests—organized beautifully.' },
            { title: 'Guided Growth', desc: 'Suggestions and tips to improve your profile.' },
            { title: 'CV Generator', desc: 'Export a professional, shareable resume.' },
            { title: 'Schools Dashboard', desc: 'Invite students and track progress at a glance.' },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border p-6 bg-white/60 hover:bg-white soft-shadow"
            >
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Split Students/Schools */}
      <section id="students" className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border p-8 bg-white/60 soft-shadow">
          <h3 className="text-2xl font-bold">For Students</h3>
          <p className="mt-3 text-gray-600">Stay motivated with progress, badges, and quick-add tools for every achievement.</p>
          <ul className="mt-6 list-disc pl-5 text-gray-700 space-y-2">
            <li>Track honors, competitions, and activities</li>
            <li>Earn badges as your profile improves</li>
            <li>Export a polished CV anytime</li>
          </ul>
        </div>
        <div id="schools" className="rounded-3xl border p-8 bg-white/60 soft-shadow">
          <h3 className="text-2xl font-bold">For Schools</h3>
          <p className="mt-3 text-gray-600">Give your students a head start and track outcomes in one place.</p>
          <ul className="mt-6 list-disc pl-5 text-gray-700 space-y-2">
            <li>Invite and manage student cohorts</li>
            <li>Monitor readiness and engagement</li>
            <li>Showcase success metrics</li>
          </ul>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-3xl border p-10 text-center bg-white/60 soft-shadow">
          <p className="text-gray-500">Testimonials coming soon…</p>
        </div>
      </section>

      {/* Category cards */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl p-1 bg-gradient-to-r soft-shadow "
              style={{ backgroundImage: `linear-gradient(90deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
            >
              <div className={`rounded-3xl p-6 bg-white border hover:translate-y-[-4px] transition will-change-transform`}> 
                <Link to={c.to} className="flex items-center gap-4">
                  <div className={`text-3xl select-none`}>{c.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{c.title}</h4>
                    <p className="text-sm text-gray-600">Add, edit, and track your {c.title.toLowerCase()}.</p>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}


