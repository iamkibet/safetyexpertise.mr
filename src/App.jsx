import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Home />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
