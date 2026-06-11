# Globe - Flight Booking Landing Page

A modern, responsive flight booking landing page built with [Next.js](https://nextjs.org) and [React](https://react.dev).

## Project Overview

**Globe** is a flight booking landing page featuring:

- 🧭 Responsive navigation bar
- ✈️ Flight booking interface
- 🎯 Hero section with call-to-action
- 🔍 Recent searches display
- 💳 Card showcase component
- 🎨 Modern UI with Tailwind CSS
- ⚡ React Compiler optimization enabled

## Tech Stack

| Technology               | Version         | Purpose                  |
| ------------------------ | --------------- | ------------------------ |
| **Next.js**              | 16.1.6          | React framework          |
| **React**                | 19.2.3          | UI library               |
| **React DOM**            | 19.2.3          | React rendering          |
| **Tailwind CSS**         | 4               | Styling                  |
| **Lucide React**         | 0.575.0         | Icon library             |
| **Babel React Compiler** | 1.0.0           | Performance optimization |
| **PostCSS**              | 4               | CSS processing           |
| **Node.js**              | 18.13+ required | Runtime                  |

## Getting Started

### Prerequisites

- Node.js 18.13 or higher
- npm 10.x or yarn 4.x

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit files.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
globe/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── RecentSearches.jsx   # Recent searches display
│   │   ├── Card.jsx            # Card component
│   │   ├── BookFlight.jsx       # Flight booking form
│   │   ├── Footer.jsx           # Footer section
│   │   └── SearchBox.jsx        # Search component
│   ├── layout.js               # Root layout with metadata
│   ├── page.js                 # Home page
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── jsconfig.json               # JavaScript path aliases
└── .gitignore                  # Git ignore rules
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - contribute to the project!

## Deploy on Vercel

### Vercel Deployment Requirements

| Requirement               | Status           | Details                            |
| ------------------------- | ---------------- | ---------------------------------- |
| **Build Command**         | ✅ Configured    | `next build`                       |
| **Start Command**         | ✅ Configured    | `next start`                       |
| **Output Directory**      | ✅ Auto-detected | `.next`                            |
| **Node Version**          | ✅ Compatible    | Supports 18.x, 20.x, 22.x          |
| **npm Version**           | ✅ Compatible    | 10.x                               |
| **Environment Variables** | Optional         | None required for basic deployment |
| **Build Time**            | ~30-45s          | Typical build duration             |

### Vercel Dependencies

**Production Dependencies:**

- `next@16.1.6` - Next.js framework
- `react@19.2.3` - React library
- `react-dom@19.2.3` - React DOM
- `lucide-react@^0.575.0` - Icon library

**Build Dependencies (included in deployment):**

- `@tailwindcss/postcss@^4` - Tailwind CSS PostCSS plugin
- `tailwindcss@^4` - Tailwind CSS framework
- `babel-plugin-react-compiler@1.0.0` - React compiler optimization

### Deployment Steps

**Option 1: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
vercel
```

**Option 2: Using Vercel Dashboard**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Accept default settings (auto-detected from Next.js)
5. Click "Deploy"

**Option 3: Using GitHub Integration**

1. Connect your GitHub repository to Vercel
2. Enable auto-deployments on push to main branch
3. All builds and deployments happen automatically

### Configuration for Vercel

The project includes optimized configuration for Vercel:

```javascript
// next.config.mjs
const nextConfig = {
  reactCompiler: true, // React compiler enabled for performance
};
```

### Environment Setup (if needed)

For future integrations, create a `.env.local` file:

```bash
# .env.local (add to .gitignore)
# NEXT_PUBLIC_API_URL=your_api_url
# DATABASE_URL=your_database_url
```

### Monitoring & Analytics

After deployment on Vercel:

- View real-time analytics in Vercel Dashboard
- Monitor Core Web Vitals
- Track performance metrics
- Check deployment logs

### Troubleshooting

| Issue          | Solution                                                             |
| -------------- | -------------------------------------------------------------------- |
| Build fails    | Check Node version (18.13+), run `npm install` locally first         |
| Styles missing | Ensure Tailwind CSS v4 is installed: `npm install -D tailwindcss@^4` |
| 404 errors     | Verify all component imports in `app/page.js`                        |
| Slow builds    | React Compiler is enabled for optimization                           |

### Post-Deployment

- **Domain Setup:** Add custom domain in Vercel Project Settings
- **SSL Certificate:** Automatically provided by Vercel
- **CDN:** Automatic global edge network distribution
- **Analytics:** Vercel Analytics (optional paid add-on)

---

**Deployment Link:** [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourrepo%2Fglobe)

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
