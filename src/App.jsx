import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';
import Footer from "./components/Footer.jsx";
import AirConditionor from "./pages/AirConditionor.jsx";
import Inquire from "./components/Inquire.jsx";
import Washer from "./pages/Washer.jsx";
import HomeClean from "./pages/HomeClean.jsx";
import AirPurifier from "./pages/AirPurifier.jsx";
import MattressClean from "./pages/MattressClean.jsx";
import HoodClean from "./pages/HoodClean.jsx";
import GroutWork from "./pages/GroutWork.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/airConditionor" element={<AirConditionor />}/>
                <Route path="/washer" element={<Washer />} />
                <Route path="/homeClean" element={<HomeClean />} />
                <Route path="/airPurifier" element={<AirPurifier />} />
                <Route path="/mattressClean" element={<MattressClean />} />
                <Route path='/hoodClean' element={<HoodClean />} />
                <Route path='/groutWork' element={<GroutWork />} />
                <Route path="/inquire" element={<Inquire />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
