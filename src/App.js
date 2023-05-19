import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layout/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cdu from './pages/cdu/Cdu';
import AAAA from './pages/karan/AAAA';


function App() {
  return (
    <>
    <Router>
      <Header />
      {/* <AAAA /> */}
      <Routes>
        <Route exact path='/Cdu' element={<Cdu />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
