import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import AppState from './context/test-app/AppState';

function App() {
  return (
    <AppState>
      <Router>
        <div className='App'>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    </AppState>
  );
}

export default App;
