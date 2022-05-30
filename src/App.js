import React from "react";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Nav from "./components/nav/Nav";
import Header from "./components/header/header";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
