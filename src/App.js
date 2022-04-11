import Navbar from "./Components/Navbar";
import Home from "./diffPages/Home";
import Contact from "./diffPages/Contact";
import Footer from "./Components/Footer";
import Featured from "./diffPages/Featured";
import SignUp from "./diffPages/SignUp";
import "./styles/App.css";
import "./styles/contact.css";
import "./styles/footer.css";
// import "./styles/restaurants.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        {}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Featured" element={<Featured />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
        </Routes>
      </>
      <Footer />
    </Router>
  );
}

export default App;
