import './Card.css';

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

type CardProps = {
  event: EventType;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(+hours, +minutes);
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
};

const Card = ({ event }: CardProps) => {
  const googleMapsAPI_KEY = 'AIzaSyCDm-kHtEIsMQMo_VkGQ3pWDz_eu7S9O-0';

  const getStreetViewImageURL = (address: string) => {
    const baseURL = "https://maps.googleapis.com/maps/api/streetview";
    const size = "600x400";
    const formattedAddress = encodeURIComponent(address);
    return `${baseURL}?size=${size}&location=${formattedAddress}&key=${googleMapsAPI_KEY}`;
  };

  return (
    <div className="card">
      <img src={getStreetViewImageURL(event.location)} alt="Event" />
      <div className="container">
        <div className="bubble-row">
          <span className="event-bubble">{event.event_type}</span>
          {event.cost !== null && !isNaN(Number(event.cost)) && (
            <span className="info-bubble">
              {Number(event.cost) === 0 ? 'Free' : `$${Number(event.cost).toFixed(2)}`}
            </span>
          )}
          {event.event_capacity !== null && event.event_capacity > 0 && (
            <span className="info-bubble">{event.event_capacity} spot{event.event_capacity > 1 ? 's' : ''}</span>
          )}
        </div>

        <p className="org">{event.organization}</p>
        <p className="location">{event.location}</p>
        <p className="description">{event.description}</p>

        <div className="bubble-row">
          <span className="info-bubble">{formatDate(event.start_date)} → {formatDate(event.end_date)}</span>
          <span className="info-bubble">
            {formatTime(event.start_time)} – {event.end_time ? formatTime(event.end_time) : 'N/A'}
          </span>
        </div>

        {event.links.length > 0 && (
          <p>
            <a href={event.links[0]} target="_blank" rel="noopener noreferrer">Links</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
