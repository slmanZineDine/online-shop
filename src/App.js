import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
         </Routes>
         <Delivery />
         <Footer />
      </>
   );
}

export default App;
