import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from './components/layout/Navbar';

import ItemState from './context/item/ItemState';

function App() {
  return (
    <ItemState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ItemState>
  );
}

export default App;
