# Pahadi Bhula Production

Website for Pahadi Bhula Production, a creative video production agency based in Dehradun. Built with Next.js (App Router), Tailwind CSS, and Sanity CMS.

## Features

- Marketing pages: Home, About, Services, Projects
- Sanity-backed blog (create/delete posts from a custom admin panel, or via Sanity Studio at `/studio`)
- Booking/contact flow with a date + time picker, emailed via Resend
- Password-gated admin panel (`/admin/blog`) with signed, HMAC-verified sessions and login rate-limiting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy these into a `.env.local` file (never committed — see `.gitignore`):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (e.g. `production`) |
| `SANITY_API_TOKEN` | Sanity write token, used to create/delete blog posts |
| `ADMIN_PASSWORD` | Password for `/admin/login` |
| `SESSION_SECRET` | Random secret used to sign admin session cookies (generate with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`) |
| `RESEND_API_KEY` | Used to email booking form submissions |
| `NEXT_PUBLIC_EMAILJS_*` | EmailJS config (legacy contact form) |

All of these must also be set in your hosting provider's environment settings — `.env.local` is never deployed.

## Notes for contributors

- This project's Next.js version renamed `middleware.ts` to `proxy.ts` — admin route protection lives in `proxy.ts` at the project root, not a `middleware.ts` file.
- Booking emails currently send via Resend's sandbox sender (`onboarding@resend.dev`), which can only deliver to the Resend account owner's own verified address. Verify a custom domain in the Resend dashboard to send to other recipients.

## Deploy

Deploy on [Vercel](https://vercel.com/new) or any Node.js host that supports Next.js. Remember to set all environment variables above on the host before the first deploy.
