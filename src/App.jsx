import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages for better performance
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const ServiceDetail = React.lazy(() => import("./pages/ServiceDetail"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Compliance = React.lazy(() => import("./pages/Compliance"));
const Contact = React.lazy(() => import("./pages/Contact"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/compliance" element={<Compliance />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
