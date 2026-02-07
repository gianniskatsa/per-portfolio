# Modern Portfolio Website

A personal portfolio website built with Next.js 16, showcasing modern web development practices and interactive user experiences. Deployed at [portfolio.giannisk.dev](https://gianniskatsanakis.vercel.app/).

## Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript 5.9, and Tailwind CSS v4
- **Responsive Design**: Seamless experience across all devices
- **Interactive UI**: Smooth scroll-triggered animations with Framer Motion
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Contact Form**: Email delivery via EmailJS
- **SEO Optimized**: OpenGraph images, sitemap, robots.txt, structured metadata
- **Type Safety**: Full TypeScript integration

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12
- **Email**: EmailJS (@emailjs/browser)
- **Deployment**: Vercel

## Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/gianniskatsa/per-portfolio.git
```

2. Navigate to the app directory and install dependencies
```bash
cd per-portfolio/portfolio
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
per-portfolio/
├── portfolio/                # Next.js application
│   ├── app/
│   │   ├── layout.tsx        # Root layout with SEO metadata
│   │   ├── page.tsx          # Home page
│   │   ├── about/page.tsx    # About page
│   │   ├── contact/page.tsx  # Contact page
│   │   ├── projects/page.tsx # Projects page
│   │   ├── components/       # Reusable components
│   │   ├── data/             # Shared data (experience, skills, projects)
│   │   └── types/            # TypeScript interfaces
│   └── public/               # Static assets
└── memory-bank/              # Project documentation
```

## Pages

- **Home**: Hero section, about summary, skills grid, experience timeline
- **About**: Detailed experience timeline, technical expertise grid
- **Projects**: Filterable project cards with tech tags
- **Contact**: Info cards, email form, social links

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
