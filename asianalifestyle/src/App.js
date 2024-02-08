
import './App.css';
import { Routes, Route } from "react-router-dom";
import AsiaAboutPage from './pages/AsiaAboutPage';
import AsiaHomepage from './pages/AsiaHomepage';
import AsiaPolicy from './pages/AsiaPolicy';
import Pagenotfound from './pages/Pagenotfound';
import Asiacontact from './pages/Asiacontact';
import Header from './components/layouts/Header';
function App() {
  return (
    <>
     <Header /> 
    <Routes>
      <Route path="/" element={<AsiaHomepage />} />
      <Route path="/about" element={<AsiaAboutPage />} />
      <Route path="/contact" element={<Asiacontact />} />
      <Route path="/policy" element={<AsiaPolicy />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  </>
  );
}

export default App;
