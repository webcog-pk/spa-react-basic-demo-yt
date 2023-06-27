import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
       <Header/>
    <Routes>
      <Route  path='/' element={ <Home/>} />
      <Route path='/about' element={ <About/>} />
    </Routes>

    
    </>
  );
}

export default App;
