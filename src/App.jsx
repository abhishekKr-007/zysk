import React from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ"; 
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Stats />
      <Features />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
