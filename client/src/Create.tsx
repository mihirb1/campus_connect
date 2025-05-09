import React, { useState } from 'react';
import './Create.css';
import { useNavigate } from 'react-router-dom';
import LocationAutocomplete from './LocationAutocomplete';

const Create = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState('');
  const [organization, setOrganization] = useState('');
  const [cost, setCost] = useState(0.00);
  const [eventCapacity, setCapacity] = useState(0);
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const zero = 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!['Social', 'Academic', 'Workshop', 'Fitness', 'Hobby'].includes(eventType)) {
      alert("Please select a valid event type.");
      return;
    }

    const eventData = {
      owner_id: 2,
      start_date: startDate,
      end_date: endDate || null,
      start_time: startTime + ":00",
      end_time: endTime + ":00",
      event_type: eventType,
      description,
      links: links ? [links] : [],
      organization,
      cost: isNaN(cost) ? null : parseFloat(cost.toFixed(2)),
      event_capacity: isNaN(eventCapacity) ? null : eventCapacity,
      location
    };

    console.log("Submitting payload:", eventData);

    fetch('http://localhost:8000/events', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      navigate('/events');
    })
    .catch((err) => {
      console.error('Could not insert form data', err);
    });
  };

  return (
    <div className="create-page">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="form-title">Create your own event</h1>

          <div className="form-row">
            <div>
              <label>Start Date <span className="required">*</span></label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div>
              <label>End Date<span className="required">*</span></label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate} required />
            </div>
            <div>
              <label>Start Time <span className="required">*</span></label>
              <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
            </div>
            <div>
              <label>End Time <span className="required">*</span></label>
              <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} min={startDate === endDate ? startTime : undefined} required />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Event Type <span className="required">*</span></label>
              <select className="event-type" value={eventType} onChange={(e) => setEventType(e.target.value)} required>
                <option value="">--Select--</option>
                <option value="Social">Social</option>
                <option value="Academic">Academic</option>
                <option value="Workshop">Workshop</option>
                <option value="Fitness">Fitness</option>
                <option value="Hobby">Hobby</option>
              </select>
            </div>
            <div>
              <label>Location <span className="required">*</span></label>
              <LocationAutocomplete
                value={location}
                onChange={setLocation}
                required
                placeholder="Enter a location"
              />
            </div>
            <div>
              <label>Cost</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '4px' }}>$</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={cost}
                  onChange={(e) => setCost(parseFloat(e.target.value))}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div>
              <label>Links</label>
              <input type="text" value={links} onChange={(e) => setLinks(e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div>
              <label>Organization <span className="required">*</span></label>
              <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} required />
            </div>
            <div>
              <label>Event Capacity</label>
              <input type="number" value={eventCapacity} min={zero} onChange={(e) => setCapacity(parseInt(e.target.value))} />
            </div>
          </div>

          <div className="form-row">
            <label>Description <span className="required">*</span></label>
            <textarea className="large-input" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
