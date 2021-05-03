import './App.css';

import Main from './components/Main'

import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header>Wyszukiwarka grup</header>
      <main>

        <nav>
            <NavLink to="/" exact>Lista wszytkich</NavLink>
            <NavLink to="/dod">Dodaj nowy</NavLink>
        </nav>

        <Main />

      </main>
    </Router>
  );
}

export default App;
