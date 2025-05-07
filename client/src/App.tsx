import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "@/components/navbar/navbar.tsx";
import Home from './Home.tsx';
import Create from './Create.tsx';
import Event from './Event.tsx';
import Map from './Map.tsx';
import Footer from './Footer.tsx';
import InfoSection from './InfoSection.tsx';
import BlurredColor from './BlurredColor.tsx';
import { Info } from 'lucide-react';

function App() {
  return (
    <Router>
      <main className="page">
        <Navbar />
 
        <Routes>
          
          <Route path="/" element={
            <>
              <Home />
              <InfoSection />
              <Footer />

            </>
          }/>
          <Route path="/footer" element={<Footer />} />
          <Route path="/create" element={<Create />} />
          <Route path="/events" element={<Event />} />
          <Route path="/maps" element={<Map />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
