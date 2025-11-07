import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FeatureCard } from '../components/FeatureCard'
import { IlloPortfolio, IlloGrowth, IlloCV, IlloDashboard, IlloStudents, IlloSchools, PillarExtracurriculars, PillarHonors, PillarVolunteering, PillarTests, IconMoney, IconAcceptance, IconPlatform, IconTime } from '../components/illustrations'

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M16.704 5.79a1 1 0 0 1 .006 1.414l-7.2 7.25a1 1 0 0 1-1.437.003L3.3 9.671a1 1 0 1 1 1.406-1.422l3.15 3.114 6.498-6.547a1 1 0 0 1 1.35-.026z" fill="#16a34a"/>
  </svg>
)

// categories grid removed in favor of core pillars continuation

export function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10 opacity-60 aurora" aria-hidden />
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 py-24 md:py-32 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="block">
              Build a <span className="gradient-text">Winning University Portfolio</span>
            </span>
            <span className="block mt-2">with PrepC</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            Centralize your achievements, track progress, and generate a polished CV. PrepC guides students toward a standout admissions profile.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <Link to="/auth/signup" className="rounded-2xl bg-indigo-600 text-white px-8 py-4 text-base md:text-lg font-semibold hover:bg-indigo-500 soft-shadow hover-lift">Get Started</Link>
            <Link to="/auth/signup?role=school" className="rounded-2xl border border-indigo-600 text-indigo-600 px-8 py-4 text-base md:text-lg font-semibold hover:bg-indigo-50 hover-lift">Join as a School</Link>
          </div>
        </div>
      </section>
      
      
      
      {/* Features */}
      <section id="features" className="mx-auto max-w-screen-2xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="All-in-one Portfolio"
            desc="Honors, extracurriculars, tests—organized beautifully."
            Illustration={IlloPortfolio}
          />
          <FeatureCard
            title="Guided Growth"
            desc="Suggestions and tips to improve your profile."
            Illustration={IlloGrowth}
          />
          <FeatureCard
            title="CV Generator"
            desc="Export a professional, shareable resume."
            Illustration={IlloCV}
          />
          <FeatureCard
            title="Schools Dashboard"
            desc="Invite students and track progress at a glance."
            Illustration={IlloDashboard}
          />
        </div>
      </section>

      {/* Split Students/Schools */}
      <section id="students" className="mx-auto max-w-screen-2xl px-6 md:px-10 py-12 grid lg:grid-cols-2 gap-8">
        <div className="group relative rounded-3xl glass-card p-8 soft-shadow overflow-hidden">
          <div className="absolute right-6 top-6 opacity-70 filter transition duration-300 group-hover:saturate-200 group-hover:brightness-110 group-hover:opacity-100">
            <IlloStudents />
          </div>
          <h3 className="text-2xl font-bold">For Students</h3>
          <p className="mt-3 text-gray-600 max-w-prose">Build proof of impact and keep everything in one beautiful place.</p>
          <ul className="mt-6 text-gray-700 space-y-3">
            <li className="flex items-start gap-2"><Check /><span>Capture honors and extracurriculars as they happen</span></li>
            <li className="flex items-start gap-2"><Check /><span>See progress with goals and friendly reminders</span></li>
            <li className="flex items-start gap-2"><Check /><span>Export a polished CV when you need it</span></li>
          </ul>
        </div>
        <div id="schools" className="group relative rounded-3xl glass-card p-8 soft-shadow overflow-hidden">
          <div className="absolute right-6 top-6 opacity-70 filter transition duration-300 group-hover:saturate-200 group-hover:brightness-110 group-hover:opacity-100">
            <IlloSchools />
          </div>
          <h3 className="text-2xl font-bold">For Schools</h3>
          <p className="mt-3 text-gray-600 max-w-prose">Invite cohorts, support growth, and showcase outcomes with ease.</p>
          <ul className="mt-6 text-gray-700 space-y-3">
            <li className="flex items-start gap-2"><Check /><span>Simple onboarding for students and advisors</span></li>
            <li className="flex items-start gap-2"><Check /><span>Readiness dashboards and engagement signals</span></li>
            <li className="flex items-start gap-2"><Check /><span>Share success stories with measurable results</span></li>
          </ul>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="mx-auto max-w-screen-2xl px-6 md:px-10 py-12">
        <div className="rounded-3xl glass-card p-10 text-center soft-shadow">
          <p className="text-gray-500">Testimonials coming soon…</p>
        </div>
      </section>

      {/* Core pillars continuation */}
      <section className="mx-auto max-w-screen-2xl px-6 md:px-10 pb-20">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">What every strong application shows</h3>
          <p className="text-gray-600 mt-2">These four pillars highlight growth beyond grades.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Extracurriculars', desc: 'Clubs, teams, leadership and community contributions.', Illo: PillarExtracurriculars },
            { title: 'Honors', desc: 'Awards and distinctions that validate excellence.', Illo: PillarHonors },
            { title: 'Volunteering', desc: 'Service and impact that show character and care.', Illo: PillarVolunteering },
            { title: 'Tests', desc: 'Scores that complement your story—not define it.', Illo: PillarTests },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05 }}
              className="relative gradient-hairline rounded-3xl p-1 pillar-card group"
            >
              <div className="rounded-3xl glass-card p-6 sm:p-8 overflow-hidden">
                <div className="absolute right-4 top-2 opacity-70 filter transition duration-300 group-hover:saturate-200 group-hover:brightness-110 group-hover:opacity-100">
                  <item.Illo />
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-2 max-w-prose">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcomes / value props */}
      <section className="mx-auto max-w-screen-2xl px-6 md:px-10 pb-24">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">Real outcomes with PrepC</h3>
          <p className="text-gray-600 mt-2">Clear benefits that make your journey easier and smarter.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Saves your money */}
          <div className="rounded-3xl glass-card p-6 soft-shadow relative overflow-hidden group">
            <div className="absolute right-4 top-4 opacity-90 filter transition duration-300 group-hover:saturate-200 group-hover:brightness-110"><IconMoney /></div>
            <div className="text-[2.5rem] font-semibold leading-none text-gray-800">Money</div>
            <p className="mt-2 text-gray-600">Saves your money on prep and applications.</p>
          </div>

          {/* Increases chances */}
          <div className="rounded-3xl glass-card p-6 soft-shadow relative overflow-hidden group">
            <div className="absolute right-4 top-4 opacity-90 filter transition duration-300 group-hover:saturate-200 group-hover:brightness-110"><IconAcceptance /></div>
            <div className="text-[2.5rem] font-semibold leading-none text-gray-800">x2–x10</div>
            <p className="mt-2 text-gray-600">Increases chances of acceptance with a stronger profile.</p>
          </div>

          {/* Organized platform */}
          <div className="rounded-3xl glass-card p-6 soft-shadow relative overflow-hidden group">
            <div className="absolute right-4 top-4 opacity-90 filter transition duration-300 group-hover:saturate-200 group-hover:brightness-110"><IconPlatform /></div>
            <div className="text-[2.5rem] font-semibold leading-none text-gray-800">All‑in‑one</div>
            <p className="mt-2 text-gray-600">Gives you an organized platform for everything that matters.</p>
          </div>

          {/* Saves time on search */}
          <div className="rounded-3xl glass-card p-6 soft-shadow relative overflow-hidden group">
            <div className="absolute right-4 top-4 opacity-90 filter transition duration-300 group-hover:saturate-200 group-hover:brightness-110"><IconTime /></div>
            <div className="text-[2.5rem] font-semibold leading-none text-gray-800">Less search</div>
            <p className="mt-2 text-gray-600">Saves time finding opportunities, tips, and next steps.</p>
          </div>
        </div>
      </section>

      {/* CTA banner (Framer-style) */}
      <section className="mx-auto max-w-screen-2xl px-6 md:px-10 pb-24">
        <div className="relative rounded-3xl soft-shadow overflow-hidden">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">
            <div className="px-6 sm:px-12 py-20 sm:py-28 flex flex-col items-center justify-center text-center">
              <h3 className="text-white text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow">
                Build your future with PrepC
              </h3>
              <div className="mt-10 sm:mt-12">
                <a
                  href="/auth/signup"
                  className="inline-flex items-center rounded-2xl bg-white text-gray-900 px-10 py-4 text-base sm:text-lg font-semibold font-sans tracking-tight transition transform hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  Start
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


