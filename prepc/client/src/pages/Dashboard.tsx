import { ProgressDonut } from '../components/ProgressDonut'

export function Dashboard() {
  return (
    <div className="mx-auto max-w-screen-2xl px-6 md:px-10 py-10">
      <h1 className="text-3xl font-bold">Welcome back, Student</h1>
      <p className="text-gray-600 mt-1">Let’s keep building your portfolio.</p>

      <section className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl glass-card p-6 hover-lift">
          <h3 className="font-semibold">Profile Completion</h3>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-purple-500" />
          </div>
          <p className="mt-2 text-sm text-gray-600">67% complete</p>
        </div>
        <div className="rounded-2xl glass-card p-6 hover-lift">
          <h3 className="font-semibold">Progress</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
            <ProgressDonut value={25} label="Honors" />
            <ProgressDonut value={55} label="Extracurriculars" />
            <ProgressDonut value={80} label="Tests" />
          </div>
        </div>
        <div className="rounded-2xl glass-card p-6 hover-lift">
          <h3 className="font-semibold">Quick Add</h3>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {['Honors','Competitions','Volunteering','Extracurriculars','Tests'].map(label => (
              <button key={label} className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50 hover-lift">+ {label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl glass-card p-6 hover-lift">
          <h3 className="font-semibold">Achievements</h3>
          <p className="text-sm text-gray-600 mt-2">No achievements yet.</p>
        </div>
        <div className="rounded-2xl glass-card p-6 hover-lift">
          <h3 className="font-semibold">Upcoming Opportunities</h3>
          <p className="text-sm text-gray-600 mt-2">Coming soon…</p>
        </div>
      </section>
    </div>
  )
}


