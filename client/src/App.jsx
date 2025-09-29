import Home from "./scenes/Home";
import Nav from "./scenes/Navigation/Navigation";
import Shop from "./scenes/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./scenes/Signup";
import Signin from "./scenes/Signin";
import Footer from "./scenes/Footer";
import About from "./scenes/About";
import Contact from "./scenes/Contact";
import ProductCard from "./scenes/ProductCard";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-100">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productcard" element={<ProductCard />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
