import './Map.css';
import { useEffect, useState, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const googleAPIKey = "AIzaSyCDm-kHtEIsMQMo_VkGQ3pWDz_eu7S9O-0";
const libraries: ("places")[] = ["places"];
const containerStyle = {
  width: "100%",
  height: "100vh",
};

const getStreetViewImageURL = (address: string) => {
  const baseURL = "https://maps.googleapis.com/maps/api/streetview";
  const size = "400x200";
  const formattedAddress = encodeURIComponent(address);
  return `${baseURL}?size=${size}&location=${formattedAddress}&key=${googleAPIKey}`;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(+hours, +minutes);
  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

function Map() {
  const [mapCenter] = useState({ lat: 33.6436, lng: -117.8419 });
  const [events, setEvents] = useState<any[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    eventType: "",
    location: "",
    startDate: "",
    organization: "",
    capacity: 0,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map): void => {
    mapRef.current = map;

    fetch("http://localhost:8000/events")
      .then((res) => res.json())
      .then((data) => {
        const geocoder = new window.google.maps.Geocoder();
        const validEvents: any[] = [];
        let remaining = data.events.length;

        data.events.forEach((event: any) => {
          if (!event.location) {
            remaining--;
            if (remaining === 0) {
              setEvents(validEvents);
              setFilteredEvents(validEvents);
            }
            return;
          }

          geocoder.geocode({ address: event.location }, (results, status) => {
            if (status === "OK" && results && results[0]) {
              const { lat, lng } = results[0].geometry.location;
              validEvents.push({ ...event, lat: lat(), lng: lng() });
            }
            remaining--;
            if (remaining === 0) {
              setEvents(validEvents);
              setFilteredEvents(validEvents);
            }
          });
        });
      });
  };

  useEffect(() => {
    let filtered = events.filter(event =>
      (!filters.eventType || event.event_type === filters.eventType) &&
      (!filters.location || event.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.organization || event.organization.toLowerCase().includes(filters.organization.toLowerCase())) &&
      (!filters.startDate || new Date(event.start_date) >= new Date(filters.startDate)) &&
      (event.event_capacity >= filters.capacity)
    );

    if (searchQuery) {
      filtered = filtered.filter(event =>
        event.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  }, [filters, searchQuery, events]);

  const handleEventClick = (event: any) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat: event.lat, lng: event.lng });
      mapRef.current.setZoom(17);
    }
    setSelectedEvent(event);
  };

  return (
    <div className="relative h-screen w-screen flex flex-row bg-black/95 text-white">
      <div className="relative flex-1 h-full">
        <LoadScript googleMapsApiKey={googleAPIKey} libraries={libraries}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            onLoad={onLoad}
            zoom={15}
            options={{ mapTypeControl: false }}
          >
            {filteredEvents.map((event, idx) => (
              <Marker
                key={idx}
                position={{ lat: event.lat, lng: event.lng }}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
            {selectedEvent && (
              <InfoWindow
                position={{ lat: selectedEvent.lat, lng: selectedEvent.lng }}
                onCloseClick={() => setSelectedEvent(null)}
              >
                <div className="text-black w-64">
                  <h3 className="text-lg font-bold mb-1">{selectedEvent.name}</h3>
                  <b><p className='text-sm mb-2'>{selectedEvent.organization}</p></b>
                  
                  <p className="text-sm mb-2">{selectedEvent.location}</p>
                  <img
                    src={getStreetViewImageURL(selectedEvent.location)}
                    alt="event"
                    className="w-full h-32 object-cover rounded mb-2"
                    onError={(e) =>
                      (e.currentTarget.src = "https://via.placeholder.com/150?text=No+Image")
                    }
                  />
                  <button
                    onClick={() => {
                      const encoded = encodeURIComponent(selectedEvent.location);
                      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encoded}`, "_blank");
                    }}
                    className="mt-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded w-full"
                  >
                    Directions
                  </button>
                </div>
              </InfoWindow>
            )}

          </GoogleMap>
        </LoadScript>
      </div>

      {!sidebarOpen && (
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-2xl z-50"
          onClick={() => setSidebarOpen(true)}
        >
          &gt;
        </button>
      )}

      {sidebarOpen && (
        <div className="absolute left-0 top-0 h-full w-[30%] p-5 overflow-scroll bg-neutral-800/90">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Events</h2>
            <button
              className="text-white text-3xl font-bold"
              onClick={() => setSidebarOpen(false)}
              style={{ background: 'none', border: 'none' }}
            >
              X
            </button>
          </div>

          {/* Filters */}
          <div className="mb-4 p-4 bg-neutral-700 rounded-md text-sm grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <label className="block mb-1 text-white">Event Type</label>
              <select
                value={filters.eventType}
                onChange={(e) => setFilters({ ...filters, eventType: e.target.value })}
                className="w-full p-2 rounded bg-white text-black"
              >
                <option value="">All Types</option>
                <option value="Social">Social</option>
                <option value="Academic">Academic</option>
                <option value="Workshop">Workshop</option>
                <option value="Fitness">Fitness</option>
                <option value="Hobby">Hobby</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-white">Location</label>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-1 text-white">Start Date</label>
              <input
                type="date"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-1 text-white">Organization</label>
              <input
                type="text"
                value={filters.organization}
                onChange={(e) => setFilters({ ...filters, organization: e.target.value })}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-1 text-white">Min Capacity</label>
              <input
                type="number"
                min={0}
                value={filters.capacity}
                onChange={(e) => setFilters({ ...filters, capacity: Number(e.target.value) })}
                className="w-full p-2 rounded bg-white text-black"
              />
            </div>
          </div>

          {/* Search */}
          <input
            type="text"
            className="mb-4 w-full p-2 rounded bg-white text-black focus:outline-none"
            style={{ backgroundColor: '#1f2937', color: 'white' }}
            placeholder="Search organization, location, or description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Event Cards */}
          {filteredEvents.map((event, idx) => (
            <div
              key={idx}
              className="bg-neutral-700/90 p-3 rounded-md mb-4 flex flex-row gap-3 hover:bg-neutral-600"
            >
              <div className="flex flex-col items-center">
                <img
                  src={getStreetViewImageURL(event.location)}
                  alt="event"
                  className="min-w-[150px] max-w-[150px] h-[150px] object-cover rounded"
                  onError={(e) =>
                    (e.currentTarget.src = "https://via.placeholder.com/150?text=No+Image")
                  }
                />
                <button
                  className="mt-2 bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
                  onClick={() => handleEventClick(event)}
                >
                  Show in Map
                </button>
              </div>
              <div className="flex flex-col flex-1 justify-between pl-2">
                <div>
                  <p className="text-sm text-blue-300 font-semibold mb-1">
                    {event.organization}
                  </p>
                  <h4 className="font-bold">{event.name}</h4>
                  <p className="text-sm text-gray-300 mb-1">
                    {event.location?.split(",")[0]}
                  </p>
                  <p className="text-sm text-gray-400 mb-3">
                    {event.description}
                  </p>

                  <div className="flex gap-4 text-xs text-gray-300 mb-3">
                    {event.cost !== null && (
                      <span>
                        💲{Number(event.cost) === 0 ? "Free" : `$${Number(event.cost).toFixed(2)}`}
                      </span>
                    )}
                    {event.event_capacity !== null && event.event_capacity > 0 && (
                      <span>
                        👥 {event.event_capacity} spot{event.event_capacity > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-400 mb-1">
                    📅 {formatDate(event.start_date)} → {formatDate(event.end_date)}
                  </p>
                  <p className="text-sm text-gray-400 mt-0.5">
                    🕒 {formatTime(event.start_time)} –{" "}
                    {event.end_time ? formatTime(event.end_time) : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Map;
