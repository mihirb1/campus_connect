import './Event.css';
import Card from './Card.tsx';
import { useState, useEffect } from 'react';
import Carousel from './Carousel.tsx';
import Filter from './Filter.tsx';

const Event = () => {
    // need to tell TypeScript what type of list to expect
    // so that it does not assume always empty list
    type EventType = {
        id: number;
        created_at: string; // ISO date-time string
        owner_id: number;
        start_date: string; // ISO date string (can use Date if you parse it)
        end_date: string;   // ISO date string
        start_time: string; // "HH:MM:SS"
        end_time: string | null;   // "HH:MM:SS"
        event_type: string;
        description: string;
        links: string[]; // array of URLs
        organization: string;
        cost: number;
        event_capacity: number | null;
        location: string;
      };

    const [events, setEvents] = useState<EventType[]>([]);
    const [pending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
        fetch('http://localhost:8000/events', {
        }) .then((res)=> {
            return res.json()
        }) .then((data) => {
            console.log(data)
            setEvents(data.events);
            setIsPending(false);
            });
        }, 500);
    }, [ ]);
    
    return (
        <div className="event">
            {pending && <div className='loading'>Loading...</div>}
            {!pending && 
            <div>

                {/* <h2 className='event-title'>Check out these events!</h2> */}
                <div className='carousel'>
                    <Carousel />
                </div>
                <div className = "the_filter">
                    <Filter />
                </div>
                <div className='cards'>
                    {events.map((event) => (
                        <div className="event-list" key={event.id}>
                            <Card event={event}></Card>
                        </div>
                    ))}
                </div>
            </div>
            }
        </div>
    );
}
 
export default Event;