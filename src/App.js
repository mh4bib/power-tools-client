import './App.css';
import NavBar from './Components/Shared/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
