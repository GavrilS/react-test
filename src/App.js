import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import AppState from './context/test-app/AppState';

function App() {
  return (
    <AppState>
      <Router>
        <div className='App'>
          <div className='container'>
            <Routes>
              <Route exact path='/' component={Home} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppState>
  );
}

export default App;
