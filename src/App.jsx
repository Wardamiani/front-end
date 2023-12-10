import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Patisserie from './pages/Patisserie'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {

  return (  
    
    
   <Router>  
      <div className="App">
      <ScrollToTop />
      </div>
    
    <Navbar />
    <Routes>
      
      <Route  exact path="/" element={<Home />} />
      <Route  path="/produtos" element={<Produtos />} />
      <Route  path="/patisserie" element={<Patisserie />} />
    </Routes>
    <Footer />
    
   </Router>
   
  );
}

export default App;
