import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Shared/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
