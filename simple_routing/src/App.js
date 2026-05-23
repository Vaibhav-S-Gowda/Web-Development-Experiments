import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import NoPage from "./components/NoPage";

function App()
{
  return(
    <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <Navbar/>
          </header>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;