# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Reduced hero section height from 90vh to 60vh for better content visibility
- Removed portfolio section and subtext from footer
- Updated social media links:
  * Added correct GitHub profile link
  * Added correct LinkedIn profile link
  * Removed Twitter/X social link
- Simplified footer layout to two columns

### Added
- Initial project setup with Next.js 14
- Project documentation (README.md)
- Development tracking (CHANGELOG.md)
- Core layout components (Navbar, Footer)
- Modern home page design with animations
- Framer Motion integration for smooth animations
- Contact form with validation and animations
- Blog page with article previews
- Newsletter subscription component
- Dark mode support in all components
- SEO metadata in layout
- Professional experience timeline
- Categorized skills display (Frontend, Backend, DevOps, Practices)
- Detailed work history section
- Comprehensive About page with:
  - Professional summary
  - Detailed experience timeline with role descriptions
  - Technical expertise categorization
  - Animated section transitions
- Projects page with:
  - Enterprise Java Application showcase
  - Portfolio Website showcase
  - Project status indicators
  - Technology tag displays
  - Call-to-action section

### Content Organization
#### Home Page
- Hero section with professional title and location
- About section with technical focus
- Skills section with categorized display
- Experience timeline with company details
- Featured projects section

#### About Page
- Professional summary and introduction
- Detailed experience timeline with role-specific achievements
- Technical expertise organized by domains:
  - Backend Development (Java, Spring, PostgreSQL)
  - DevOps & Cloud (Docker, Kubernetes, Terraform)
  - Best Practices (Clean Code, TDD, Microservices)
  - Frontend Development (React, Next.js, TypeScript)
- Animated content sections with Framer Motion

#### Projects Page
- Project cards with detailed descriptions
- Technology stack tags for each project
- Project status indicators
- Collaborative call-to-action section
- Responsive grid layout

#### Contact Page
- Enhanced contact form with validation
- Professional information display:
  - Current location (London, UK)
  - Work availability (Remote - EU)
  - Professional role details
- Social media integration:
  - LinkedIn profile link
  - GitHub profile link
- Animated sections with Framer Motion
- Responsive layout with grid system

#### Blog Page
- Technical article previews
- Categories for different tech topics
- Reading time estimates

### Changed
- Updated project structure to follow Next.js 14 best practices
- Enhanced layout with responsive design
- Improved typography and spacing
- Fixed ContactForm component name (from ContectForm)
- Enhanced About section content with more detailed technical focus
- Updated Contact page with comprehensive professional information
- Improved Blog page content with technical focus
- Added developer name (Giannis Katsanakis) to home and contact pages
- Updated social links with correct LinkedIn and GitHub profiles
- Removed Twitter/X social link
- Removed title from navbar
- Centered navigation links in navbar
- Improved contact page layout with grid-based information cards
- Simplified Next.js configuration for better performance
- Added "use client" directive to Blog page for client-side features
- Updated navigation links in Navbar component
- Improved mobile menu functionality with animation

### Planned
- Blog post detail pages
- Form submission functionality
- Newsletter subscription backend
- Image optimization

## Development Log

### [2025-02-04] - Initial Setup & Core Components
- 🎯 Goal: Set up project documentation and implement core components
- 📝 Changes:
  - Created comprehensive README.md
  - Initialized CHANGELOG.md for development tracking
  - Implemented Navbar with responsive design
  - Created Footer with social links
  - Developed modern home page with sections:
    - Hero section with gradient background
    - About section with skills grid
    - Featured projects preview
  - Added Contact page with form and social links
  - Created Blog page with article previews
  - Implemented dark mode support across all components
  - Implemented Projects page with sample projects
  - Enhanced navigation and mobile responsiveness
  - Improved page routing and configuration
- 🔧 Technical Details:
  - Next.js 14 with TypeScript
  - Tailwind CSS for styling
  - Framer Motion for animations
  - ESLint and Prettier for code formatting
  - Responsive design for all screen sizes
- ✅ Status: Completed
- ⏭️ Next Steps:
  - Implement blog post detail pages
  - Add form submission functionality
  - Set up newsletter subscription backend
