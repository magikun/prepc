import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export function SignIn() {
  const { signInWithEmail, signInWithGoogle } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <p className="mt-2 text-sm text-gray-600">Welcome back to PrepC.</p>

      <div className="mt-8 space-y-4">
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
                await signInWithEmail(email, password)
                navigate('/dashboard')
              } catch (e) { setError('Invalid credentials') }
            }}
            className="rounded-xl bg-indigo-600 text-white px-4 py-3 hover:bg-indigo-500"
          >
            Sign in
          </button>
        </div>

        {error && <p className="text-sm text-rose-600">{error}</p>}

        <p className="text-sm text-gray-600">Don't have an account? <Link to="/auth/signup" className="text-indigo-600">Sign up</Link></p>
      </div>
    </div>
  )
}


