import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import FeaturedRest from "./Pages/FeaturedRest";
import SignUp from "./Pages/SignUp";
import "./styles/App.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/restaurants.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        {}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/restaurants" element={<FeaturedRest />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
        </Routes>
      </>
      <Footer />
    </Router>
  );
}

export default App;
