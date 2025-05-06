import './Event.css';
import Card from './Card.tsx';
import { useState, useEffect } from 'react';
import Carousel from './Carousel.tsx';
import Filter from './Filter.tsx';

type EventType = {
  id: number;
  created_at: string;
  owner_id: number;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string | null;
  event_type: string;
  description: string;
  links: string[];
  organization: string;
  cost: number;
  event_capacity: number | null;
  location: string;
};

type FilterType = {
  eventType: string;
  location: string;
  startDate: string;
  organization: string;
  capacity: number;
};

const Event = () => {

  const [events, setEvents] = useState<EventType[]>([]);
  const [pending, setIsPending] = useState(true);
//   we pass filters and setFilters, which are originally empty
  const [filters, setFilters] = useState<FilterType>({
    eventType: '',
    location: '',
    startDate: '',
    organization: '',
    capacity: 0,
  });

  useEffect(() => {
    fetch('http://localhost:8000/events')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.events);
        setIsPending(false);
      });
  }, []);

  const applyFilters = (event: EventType) => {
    // destruct JavScript object 'filters'
    const { eventType, location, startDate, organization, capacity } = filters;

    // if first condition is true !attribute, set const value to True, else check second condition and set accordingly.
    const matchEventType = !eventType || event.event_type === eventType;
    const matchLocation = !location || event.location === location;
    const matchStartDate = !startDate || event.start_date.slice(0, 10) === startDate;
    const matchOrg = !organization || event.organization.toLowerCase() === organization.toLowerCase();
    const matchCapacity = capacity === 0 || (event.event_capacity !== null && event.event_capacity >= capacity);

    return matchEventType && matchLocation && matchStartDate && matchOrg && matchCapacity;
  };

//   only get events where all filters match/are not filled in
const filteredEvents = events
  .filter(applyFilters)
  .filter(event => event.location && event.location.trim() !== "");
  // filters will automatically update, then we are just making comparisons in applyFilters
  return (
    <div className="event">
      {pending && <div className="loading">Loading...</div>}
      {!pending && (
        <div className="event-container">
          <div className="carousel"><Carousel /></div>
          <div className="the_filter">
            {/* passes in filters JavaScript object and setFilters as props */}
            <Filter filters={filters} setFilters={setFilters} />
          </div>
          {/* only maps filtered events */}
          <div className="cards">
            {filteredEvents.map((event) => (
              <div className="event-list" key={event.id}>
                <Card event={event} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
