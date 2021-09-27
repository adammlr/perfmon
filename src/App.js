import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import { ApmRoute as Route } from '@elastic/apm-rum-react';

import About from './About';
import Home from './Home';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
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
                    <Link to="/todo">About</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/about" component={About} />
                    <Route path="/todo" component={Todo} />
                    <Route path="/" component={Home} />
                    
              </Switch>
            </div>
          </Router>
      </header>
    </div>
  );
}

export default App;
