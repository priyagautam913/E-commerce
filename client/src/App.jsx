import Home from "./scenes/Home";
import Nav from "./scenes/Navigation/Navigation";
import Shop from "./scenes/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
