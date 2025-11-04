# PrepC MVP

Modern full-stack MVP for PrepC.

## Structure

- `client-react`: React + TypeScript + Tailwind + Framer Motion
- `server`: Node.js + TypeScript + Express

## Scripts

- Frontend
  - `cd prepc/client-react && npm start`
- Backend
  - `cd prepc/server && npm start`

## Environment (Frontend)

Create `prepc/client-react/.env`:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...
```

Generate these in Firebase Console for Email/Password and Google providers.

## Development

- Start frontend dev server first.
- Start backend server on http://localhost:4000.

## Pages

- Landing page with hero, features, student/school sections, testimonials placeholder, and 6 animated category cards.
- Auth: Sign In / Sign Up with Email + Google (Firebase Auth).
- Dashboard: profile progress, badges, quick-add.
- Category pages: add/delete items with modal and simple stats.

## Notes

- shadcn/ui can be added next; Tailwind v4 is already configured.

