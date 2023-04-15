import About from "./Component/About";
import Contact from "./Component/Contact";
import Experience from "./Component/Experience";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Portfolio from "./Component/Portfolio";
import Services from "./Component/Services";
import Testomonial from "./Component/Testomonial";
export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testomonial />
      <Contact />
      <Footer />
    </>
  );
}
