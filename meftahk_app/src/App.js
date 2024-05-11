import "./App.css";
import NavBar from "./Components/NavBar";
import Cars from "./Components/Cars";
import { BrwoserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="titleTxt">
          <p>اختر سيارتك</p>
        </div>
        <Routes>
          <Route path = "/" element={<Cars/>} />
          <Route path = "/" element = {<Cars />} />
          <Route path = "/" element = {<Cars />} />
        </Routes>
      </Router>

      <Cars />
    </div>
  );
}

export default App;
