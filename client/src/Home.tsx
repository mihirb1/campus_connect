import { useNavigate } from 'react-router-dom';
import './Home.css';
import BlurredColor from './BlurredColor';
const Home = () => {
  const navigate = useNavigate();

  const createEvents = () => navigate('/events');
  const exploreEvents = () => navigate('/create');

  return (
    <div className="home-container">
      {/* <BlurredColor /> */} 
      {/* comment/comment out to include blurred color */}
      <div className="left-content">
        <h1 className="title">Campus Connect</h1>
        <h2 className="subtitle">Redefining Campus Community</h2>
        <p className="d">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
          Et integer facilisi eget diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
        </p>
        <div className="buttons">
          <button onClick={exploreEvents} className="get-started">Get Started</button>
          <button onClick={createEvents} className="get-started">Explore Events</button>
        </div>
      </div>
      <div className="right-images">
        <img src="/ucla.jpeg" alt="UCLA" className="img-back" />
        <img src="/sdsu.jpg" alt="SDSU" className="img-front" />
      </div>
    </div>
  );
};

export default Home;
