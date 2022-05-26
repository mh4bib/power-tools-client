import './App.css';
import NavBar from './Components/Shared/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import Login from './Components/LoginRegister/Login';
import Register from './Components/LoginRegister/Register';
import RequireAuth from './Components/LoginRegister/RequireAuth';
import Purchase from './Components/Purchase/Purchase';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/Dashboard/MyOrders';
import AddReview from './Components/Dashboard/AddReview';
import MyProfile from './Components/Dashboard/MyProfile';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import AddTool from './Components/Dashboard/AddTool';
import ManageTools from './Components/Dashboard/ManageTools';
import ManageAllOrders from './Components/Dashboard/ManageAllOrders';
import NotFound from './Components/Shared/NotFound';
import Payment from './Components/Purchase/Payment';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='add-review' element={<AddReview></AddReview>}></Route>
          <Route path='my-profile/:email' element={<MyProfile></MyProfile>}></Route>
          <Route path='manage-all-orders' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='add-product' element={<AddTool></AddTool>}></Route>
          <Route path='make-admin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manage-products' element={<ManageTools></ManageTools>}></Route>
        </Route>
        <Route path='/purchase/:_id' element={<RequireAuth><Purchase setTotal={setTotal}></Purchase></RequireAuth>}></Route>
        <Route path='/payment/:_id' element={<RequireAuth><Payment total={total}></Payment></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
