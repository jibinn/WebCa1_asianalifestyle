
import './App.css';
import { Routes, Route } from "react-router-dom";
import AsiaAboutPage from './pages/AsiaAboutPage';
import AsiaHomepage from './pages/AsiaHomepage';
import AsiaPolicy from './pages/AsiaPolicy';
import Pagenotfound from './pages/Pagenotfound';
import Asiacontact from './pages/Asiacontact';
import Layouts from './components/layouts/Layouts';
import AsiaRegister from './pages/Auth/AsiaRegister';
import Login from './pages/Auth/Login';
import AsiaDashboard from './pages/users/AsiaDashboard';
import PrivateRoute from './components/Routes/Private';
import AsiaForgot from './pages/Auth/AsiaForgot';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Orders from './pages/users/Orders';
import Profile from './pages/users/Profile';
function App() {
  return (
    <>
      <Layouts>
        <Routes>
          <Route path="/" element={<AsiaHomepage />} />
          <Route path="/register" element={<AsiaRegister />} />
          <Route path="/dashboard" element={<PrivateRoute/>}>
             <Route path="user" element={<AsiaDashboard />} />
             <Route path="user/orders" element={<Orders />} />
             <Route path="user/profile" element={<Profile />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute/>}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/create-category" element={<CreateCategory />} />
            <Route path="admin/create-product" element={<CreateProduct />} />
          </Route>
    
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<AsiaForgot/>} />
          <Route path="/about" element={<AsiaAboutPage />} />
          <Route path="/contact" element={<Asiacontact />} />
          <Route path="/policy" element={<AsiaPolicy />} />
          <Route path="*" element={<Pagenotfound />} />
         
        </Routes>
      </Layouts>
    
    </>
  );
}

export default App;
