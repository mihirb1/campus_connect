import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "@/components/navbar/navbar.tsx";
import Home from './Home.tsx';
import Create from './Create.tsx';
import Event from './Event.tsx';
import Map from './Map.tsx';
import BlurredColor from './BlurredColor.tsx';

function App() {
  return (
    <Router>
      <main className="page">
        <Navbar />
 
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/events" element={<Event />} />
          <Route path="/maps" element={<Map />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
