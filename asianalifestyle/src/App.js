
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


function App() {
  return (
    <>
      <Layouts>
        <Routes>
          <Route path="/" element={<AsiaHomepage />} />
          <Route path="/register" element={<AsiaRegister />} />
          <Route path="/login" element={<Login />} />
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
