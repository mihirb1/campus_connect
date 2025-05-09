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
import Login from './Login.tsx';
import LandingPage from './LandingPage.tsx';
import { UserContext } from './context.ts';
import { useEffect, useState } from 'react';
import {User} from './User.tsx'



function App() {
  const [user, setUser] = useState<User | undefined>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : undefined;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/create" element={<Create />} />
          <Route path="/events" element={<Event />} />
          <Route path="/maps" element={<Map />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
