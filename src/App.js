import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Restaurent from './components/Restaurent/Restaurent';
import SmartGadgets from './components/SmartGadgets/SmartGadgets';
import Travels from './components/Travels/Travels';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/restaurent' element={<Restaurent />}></Route>
        <Route path='/smartgadgets' element={<SmartGadgets />} />
        <Route path='/travels' element={<Travels />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
