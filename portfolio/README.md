This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This project is optimized for deployment on Vercel. Follow these steps to deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Visit [Vercel](https://vercel.com) and sign up or log in

3. Click "New Project" and import your repository

4. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: portfolio/
   - Build Command: Will be auto-detected
   - Output Directory: Will be auto-detected
   - Install Command: `npm install`

5. Environment Variables:
   - Copy variables from `.env.example` if needed
   - Add them in Vercel's project settings

6. Deploy!

The project includes these optimizations for Vercel:
- Standalone output configuration
- Automatic static optimization where possible
- Proper caching headers for static assets
- Image optimization settings
- Node.js version specification (>=18.17.0)

For local development, refer to the Getting Started section above.
