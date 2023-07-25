import logo from "./img/musical-note.png";
import "./App.css";
import Search from "./components/search/Search.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <div className="App-header-headline">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Never miss a concert from your favourite artist again!</p>
          </div>
          <Search />
        </div>
      </header>
    </div>
  );
}

export default App;
