import { createContext, useContext, useEffect, useState } from 'react'
import { auth, googleProvider, firebaseEnabled } from '../lib/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut as fbSignOut } from 'firebase/auth'
import type { User } from 'firebase/auth'

const DEMO_STORAGE_KEY = 'prepc_demo_user'

type AuthContextValue = {
  user: User | null
  loading: boolean
  signInWithEmail: (email: string, password: string) => Promise<void>
  signUpWithEmail: (email: string, password: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Demo mode: no Firebase/config required
    if (!firebaseEnabled || !auth) {
      try {
        const raw = localStorage.getItem(DEMO_STORAGE_KEY)
        if (raw) {
          const parsed = JSON.parse(raw) as { uid: string; email?: string }
          // Cast to User for compatibility; demo does not rely on User fields
          setUser(parsed as unknown as User)
        }
      } catch {
        /* ignore */
      } finally {
        setLoading(false)
      }
      return
    }
    const unsub = onAuthStateChanged(auth, (u) => { setUser(u); setLoading(false) })
    return () => unsub()
  }, [])

  const value: AuthContextValue = {
    user,
    loading,
    async signInWithEmail(email, password) {
      if (!firebaseEnabled || !auth) {
        const demo = { uid: crypto.randomUUID(), email }
        localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(demo))
        setUser(demo as unknown as User)
        return
      }
      await signInWithEmailAndPassword(auth, email, password)
    },
    async signUpWithEmail(email, password) {
      if (!firebaseEnabled || !auth) {
        const demo = { uid: crypto.randomUUID(), email }
        localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(demo))
        setUser(demo as unknown as User)
        return
      }
      await createUserWithEmailAndPassword(auth, email, password)
    },
    async signInWithGoogle() {
      if (!firebaseEnabled || !auth || !googleProvider) {
        const demo = { uid: crypto.randomUUID(), email: 'demo@prepc.app' }
        localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(demo))
        setUser(demo as unknown as User)
        return
      }
      await signInWithPopup(auth, googleProvider)
    },
    async signOut() {
      if (!firebaseEnabled || !auth) {
        localStorage.removeItem(DEMO_STORAGE_KEY)
        setUser(null)
        return
      }
      await fbSignOut(auth)
    },
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


