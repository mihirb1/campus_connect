import Navbar from "./Navbar";
import {useNavigate} from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate();

    const createEvents = () => {
        navigate('/events');
    }

    const exploreEvents = () => {
        navigate('/create')
    }

    return (
        <div>
            
            <h1 className = "title">Campus Connect </h1>
            <h1 className = "subtitle">Redefining Campus Community </h1>
            <div className = 'buttons'>
                <button onClick = {exploreEvents} className = "get-started">Get Started</button>
                <button onClick = {createEvents} className = "get-started">Explore Events</button>
            </div>
        </div>
    );
}
 
export default Home;