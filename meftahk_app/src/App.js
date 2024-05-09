import "./App.css";
import NavBar from "./Components/NavBar";
import Cars from "./Components/Cars";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="titleTxt">
        <p>اختر سيارتك</p>
      </div>

      <Cars />
    </div>
  );
}

export default App;
