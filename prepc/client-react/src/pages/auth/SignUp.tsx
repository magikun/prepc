import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export function SignUp() {
  const location = useLocation()
  const preselectedRole = new URLSearchParams(location.search).get('role') || 'student'
  const [role, setRole] = useState(preselectedRole)
  const navigate = useNavigate()
  const { signUpWithEmail, signInWithGoogle } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-bold">Create your account</h1>
      <p className="mt-2 text-sm text-gray-600">Join PrepC and start building your portfolio.</p>

      <div className="mt-6">
        <label className="text-sm text-gray-700">I am a</label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <button onClick={()=>setRole('student')} className={`rounded-xl border px-4 py-3 ${role === 'student' ? 'border-indigo-600 bg-indigo-50' : ''}`}>Student</button>
          <button onClick={()=>setRole('school')} className={`rounded-xl border px-4 py-3 ${role === 'school' ? 'border-indigo-600 bg-indigo-50' : ''}`}>School</button>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <button
          onClick={async () => {
            try {
              await signInWithGoogle()
              navigate('/dashboard')
            } catch (e) { setError('Google sign-in failed') }
          }}
          className="w-full rounded-xl border px-4 py-3 hover:bg-gray-50"
        >
          Continue with Google
        </button>

        <div className="grid grid-cols-1 gap-3">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="rounded-xl border px-4 py-3" placeholder="Email" type="email" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className="rounded-xl border px-4 py-3" placeholder="Password" type="password" />
          <button
            onClick={async () => {
              try {
                await signUpWithEmail(email, password)
                // TODO: persist role to backend later
                navigate('/dashboard')
              } catch (e) { setError('Sign up failed') }
            }}
            className="rounded-xl bg-indigo-600 text-white px-4 py-3 hover:bg-indigo-500"
          >
            Create account
          </button>
        </div>

        {error && <p className="text-sm text-rose-600">{error}</p>}

        <p className="text-sm text-gray-600">Already have an account? <Link to="/auth/signin" className="text-indigo-600">Sign in</Link></p>
      </div>
    </div>
  )
}


