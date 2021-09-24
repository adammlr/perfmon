import './App.css';
import {
  BrowserRouter,
  Switch,
  Link,
  Route
} from "react-router-dom";

import About from './About';
import Home from './Home';
import Raygun from './Raygun';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Raygun />
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/todo">Todos</Link>
                  </li>
                </ul>
              </nav>
<main>
              <Switch>
              <Route path="/about" component={About} />
              <Route path="/todo" component={Todo} />
                <Route path="/" component={Home} />
              </Switch>
              </main>
            </div>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
