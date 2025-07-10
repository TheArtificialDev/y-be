# YBE Homepage

A modern Next.js website for Your Business Engine (YBE) with four main pages showcasing business solutions and services.

## Project Structure

This project includes the following pages:
- **Home** (`/`) - Landing page with hero section and feature highlights
- **Our Process** (`/our-process`) - Detailed overview of the company's methodology
- **Case Studies** (`/case-studies`) - Success stories and client testimonials
- **Getting Started** (`/getting-started`) - Contact form and onboarding information

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive design** for all device sizes
- **Modern UI/UX** with clean, professional design
- **Navigation component** with active page highlighting

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) with your browser to see the result.

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel deployment

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── our-process/
│   │   └── page.tsx        # Our Process page
│   ├── case-studies/
│   │   └── page.tsx        # Case Studies page
│   └── getting-started/
│       └── page.tsx        # Getting Started page
└── components/
    └── Navigation.tsx      # Navigation component
```

## Development

The project is set up with:
- ESLint for code linting
- TypeScript for type checking
- Tailwind CSS for utility-first styling
- Responsive design patterns

## Deployment

This project is ready to be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

```bash
npm run build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
