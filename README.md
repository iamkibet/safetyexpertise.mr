# Safety Expertise - Corporate Website

A modern, responsive corporate website for Safety Expertise, a safety equipment
and compliance services company based in Mauritania.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags, sitemap, and semantic HTML
- **Performance**: Code-split routes with React.lazy for optimal loading
- **Accessibility**: ARIA labels and semantic HTML elements
- **Contact Forms**: Functional contact form with validation
- **Interactive Components**: Modal lightbox, accordion, and filterable
  galleries

## 📋 Pages & Routes

- **Home (/)**: Hero section, services overview, why us section, client logos
- **About (/about)**: Mission statement, company history, team grid, values
- **Services (/services)**: Service categories with detailed descriptions
- **Service Detail (/services/:slug)**: Individual service pages with features
- **Projects (/projects)**: Filterable project gallery with lightbox modal
- **Compliance (/compliance)**: Accordion list of certifications and regulations
- **Contact (/contact)**: Contact form, company info, map placeholder

## 🛠️ Tech Stack

- **React 19**: Latest React with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router v6**: Client-side routing with dynamic routes
- **Tailwind CSS**: Utility-first CSS framework with custom brand colors
- **React Icons**: Comprehensive icon library
- **React Helmet**: SEO meta tag management
- **React Helmet Async**: Async version for React 19 compatibility

## 🎨 Design System

### Brand Colors

- **Primary**: #18558c (Deep Blue)
- **Light**: #f8f8f8 (Near White)
- **Accent**: #ff3131 (Vivid Red)

### Typography

- Responsive font sizes with Tailwind's scale
- Consistent spacing and line heights
- Semantic HTML structure

### Components

- Reusable Button component with variants
- Responsive Navbar with hamburger menu
- Hero sections with configurable props
- Service cards with hover effects
- Contact form with validation
- Modal components for project details

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ServiceCard.jsx
│   └── ContactForm.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── Projects.jsx
│   ├── Compliance.jsx
│   └── Contact.jsx
├── data.js             # Content data and configurations
├── App.jsx             # Main app with routing
├── main.jsx           # Entry point
└── index.css          # Tailwind imports and custom styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd safetyexpertise.mr
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Content Management

The website content is managed through the `src/data.js` file, which includes:

- **Services**: Service categories and descriptions
- **Projects**: Portfolio items with categories
- **Team**: Team member information
- **Company History**: Timeline of company milestones
- **Values**: Company values and principles
- **Compliance**: Certifications and regulations
- **Contact Info**: Company contact details

## 🔧 Customization

### Adding New Services

1. Add service data to `src/data.js`
2. Create service detail page or use existing template
3. Update navigation if needed

### Modifying Brand Colors

Update the colors in `tailwind.config.js`:

```js
colors: {
  primary: "#18558c",
  light: "#f8f8f8",
  accent: "#ff3131",
}
```

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route to `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for each page
- Sitemap.xml and robots.txt
- Open Graph tags (can be added)
- Structured data (can be added)

## 🔒 Security

- Form validation and sanitization
- HTTPS ready
- Secure headers (can be added)

## 📊 Performance

- Code splitting with React.lazy
- Optimized images (placeholder for now)
- Minimal bundle size
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Safety Expertise.

## 📞 Support

For support or questions, contact the development team or Safety Expertise
directly.

---

**Safety Expertise** - Reliable. Preventive. Professional.
