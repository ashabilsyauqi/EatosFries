import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </>
  );
}

export default App;
