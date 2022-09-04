import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Roster from './pages/roster/Roster';
import Schedule from './pages/schedule/Schedule';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/roster' element={<Roster />}/>
          <Route path='/schedule' element={<Schedule />}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
