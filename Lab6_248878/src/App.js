import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'
//import {useState} from 'react'


function App() {
  return (
    <BrowserRouter>
      <header>Wyszukiwarka grup</header>
      <div>
        <Navigation/>
        <Main/>
      </div>
    </BrowserRouter>
    //<Router basename={process.env.PUBLIC_URL}>
      //<header>Wyszukiwarka grup</header>
      //<main>

        //<nav>
            //<NavLink to="/" exact>Lista wszytkich</NavLink>
            //<NavLink to="/dod">Dodaj nowy</NavLink>
        //</nav>

        //<Main />

      //</main>
    //</Router>
  );
}

export default App;
