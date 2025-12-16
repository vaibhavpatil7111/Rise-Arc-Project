# RiceArc - Premium Digital Agency Website

A modern, professional React-based website for RiceArc, a freelance digital agency specializing in web development, SEO, CRM solutions, AI chatbots, and brand design.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Semantic HTML, proper meta tags, and structured content
- **Performance Focused**: Lightweight animations and optimized components
- **Interactive Elements**: Smooth scroll animations and hover effects
- **Contact Form**: Functional contact form for lead generation

## Tech Stack

- **React 18** - Modern functional components with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── TechStack.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Process.jsx
│   │   └── Contact.jsx
│   ├── Header.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Website Sections

1. **Hero Section** - Compelling headline with clear value proposition
2. **About RiceArc** - Trust-building content about the agency
3. **Services** - Detailed service offerings with descriptions
4. **Technology Stack** - Technologies and frameworks used
5. **Why Choose Us** - Key differentiators and benefits
6. **Process** - Step-by-step workflow methodology
7. **Contact** - Contact form and business information
8. **Footer** - Company info, links, and contact details

## Customization

### Colors
The website uses a blue-based color scheme. To customize:
- Primary: `blue-600` (#2563eb)
- Secondary: `gray-900` (#111827)
- Accent: `purple-50` (#faf5ff)

### Content
Update the following files to customize content:
- Contact information in `Contact.jsx` and `Footer.jsx`
- Service descriptions in `Services.jsx`
- Company information in `About.jsx`

### Logo
Replace logo files in the `/images/` directory and update references in:
- `Header.jsx`
- `Footer.jsx`
- `index.html` (favicon)

## Performance Optimizations

- Lazy loading with Framer Motion's `useInView`
- Optimized images and icons
- Minimal bundle size with tree shaking
- CSS purging in production builds

## SEO Features

- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Meta tags for description and keywords
- Alt text for images
- Clean URL structure with anchor links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential. All rights reserved by RiceArc.