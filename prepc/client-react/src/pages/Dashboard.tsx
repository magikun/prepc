export function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold">Welcome back, Student</h1>
      <p className="text-gray-600 mt-1">Let’s keep building your portfolio.</p>

      <section className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-6 bg-white/60">
          <h3 className="font-semibold">Profile Completion</h3>
          <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-purple-500" />
          </div>
          <p className="mt-2 text-sm text-gray-600">67% complete</p>
        </div>
        <div className="rounded-2xl border p-6 bg-white/60">
          <h3 className="font-semibold">Badges</h3>
          <div className="mt-3 flex gap-2 text-2xl">🏆 🎯 📚</div>
        </div>
        <div className="rounded-2xl border p-6 bg-white/60">
          <h3 className="font-semibold">Quick Add</h3>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {['Honors','Competitions','Activities','Volunteering','Extracurriculars','Tests'].map(label => (
              <button key={label} className="rounded-xl border px-3 py-2 text-sm hover:bg-gray-50">+ {label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6 bg-white/60">
          <h3 className="font-semibold">Achievements</h3>
          <p className="text-sm text-gray-600 mt-2">No achievements yet.</p>
        </div>
        <div className="rounded-2xl border p-6 bg-white/60">
          <h3 className="font-semibold">Upcoming Opportunities</h3>
          <p className="text-sm text-gray-600 mt-2">Coming soon…</p>
        </div>
      </section>
    </div>
  )
}


