import { initializeApp, getApps } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
} as const

const hasConfig = Boolean(cfg.apiKey && cfg.authDomain && cfg.projectId && cfg.appId)

let app: import('firebase/app').FirebaseApp | undefined
try {
  if (hasConfig) {
    app = getApps().length ? getApps()[0] : initializeApp(cfg)
  }
} catch {
  app = undefined
}

export const firebaseEnabled = Boolean(app)
export const auth = app ? getAuth(app) : null
export const googleProvider = app ? new GoogleAuthProvider() : null


