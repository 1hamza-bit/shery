import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Portfolio';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>    
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />
        <Route
          path="/products"
          element={<Projects />}
        />
          <Route
          path="/contact"
          element={<Contact />}
        />
        </Routes>
        </Router>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
