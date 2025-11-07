import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { SignIn } from './pages/auth/SignIn'
import { SignUp } from './pages/auth/SignUp'
import { Dashboard } from './pages/Dashboard'
import { CategoryPage } from './pages/CategoryPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-extrabold gradient-text hover:opacity-90 transition">PrepC</Link>
          <nav className="flex items-center gap-3">
            <Link className="px-3 py-2 text-sm text-gray-700 hover:text-indigo-700 rounded-lg hover:bg-indigo-50 transition" to="/dashboard">Dashboard</Link>
            <Link className="rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-500 hover-lift" to="/auth/signin">Sign in</Link>
            <Link className="rounded-xl border border-indigo-600 text-indigo-700 px-4 py-2 text-sm hover:bg-indigo-50 hover-lift" to="/auth/signup">Get Started</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/honors" element={<CategoryPage title="Honors" icon="🏅" />} />
          <Route path="/extracurriculars" element={<CategoryPage title="Extracurriculars" icon="🎭" />} />
          <Route path="/competitions" element={<CategoryPage title="Competitions" icon="🧠" />} />
          <Route path="/volunteering" element={<CategoryPage title="Volunteering" icon="🤝" />} />
          <Route path="/tests" element={<CategoryPage title="Tests" icon="🧪" />} />
        </Routes>
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-10 py-10 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} PrepC</p>
          <div className="flex gap-4">
            <a className="hover:text-indigo-600" href="#features">Features</a>
            <a className="hover:text-indigo-600" href="#students">Students</a>
            <a className="hover:text-indigo-600" href="#schools">Schools</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
