import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Home />
      </div>
    </div>
  );
}

export default App;
