import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Home />
      </div>
    </div>
  );
}

export default App;
