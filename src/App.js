import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import Footer from "./component/Footer";
import About from "./pages/About";
import Career from "./pages/Career";
import "./assets/style.css";
import "./assets/responsive.css";
import Navbar from "./component/Navbar";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import AnimationPage from "./component/AnimationPage";
import { useState, useEffect } from "react";
import CareerForm from "./component/CareerForm";

function App() {
 const [loading, setLoading] = useState(false);

 useEffect(() => {
  setLoading(true);
  setTimeout(() => {
   setLoading(false);
  }, 2000);
 }, []);

 return (
  <>
   {loading ? (
    <AnimationPage />
   ) : (
    <Router>
     <ScrollToTop />
     <Navbar />
     <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/servicesApp" element={<Services />} />
      <Route exact path="/servicesBlock" element={<Services />} />
      <Route exact path="/servicesGame" element={<Services />} />
      <Route exact path="/servicesUiUx" element={<Services />} />
      <Route exact path="/ourWOrk" element={<OurWork />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/career" element={<Career />} />
     </Routes>
     <Footer />
    </Router>
   )}
  </>
 );
}

export default App;
