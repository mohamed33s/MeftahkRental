import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Rating from "./Components/Rating";
import Cars from "./Components/Cars";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
