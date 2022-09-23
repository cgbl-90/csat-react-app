import logo from "./logo.svg";
import carmen from "./carmen.svg";
import Survey from "./Survey";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={carmen} alt="Carmen López" />
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={logo} className="app-logo" alt="logo" />
        </a>
      </header>
      <main>
        <Survey />
      </main>
      <footer>
        <h3>Coded by Carmen López @ 2022</h3>
      </footer>
    </div>
  );
}

export default App;
