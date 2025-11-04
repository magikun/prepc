import { createContext, useContext, useEffect, useState } from 'react'
import { auth, googleProvider, firebaseEnabled } from '../lib/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut as fbSignOut } from 'firebase/auth'
import type { User } from 'firebase/auth'

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
    if (!firebaseEnabled || !auth) { setLoading(false); return }
    const unsub = onAuthStateChanged(auth, (u) => { setUser(u); setLoading(false) })
    return () => unsub()
  }, [])

  const value: AuthContextValue = {
    user,
    loading,
    async signInWithEmail(email, password) {
      if (!firebaseEnabled || !auth) throw new Error('Auth not configured')
      await signInWithEmailAndPassword(auth, email, password)
    },
    async signUpWithEmail(email, password) {
      if (!firebaseEnabled || !auth) throw new Error('Auth not configured')
      await createUserWithEmailAndPassword(auth, email, password)
    },
    async signInWithGoogle() {
      if (!firebaseEnabled || !auth || !googleProvider) throw new Error('Auth not configured')
      await signInWithPopup(auth, googleProvider)
    },
    async signOut() {
      if (!firebaseEnabled || !auth) return
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


