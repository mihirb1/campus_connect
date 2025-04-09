import React, { useState } from 'react';
import './Create.css';

const Create = () => {
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState('');
  const [organization, setOrganization] = useState('');
  const [cost, setCost] = useState('');
  const [eventCapacity, setCapacity] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // INSERT into database (postgres)
    console.log('Submitted email:', email);
    console.log('Submitted email:', startDate);
    console.log('Submitted email:', endDate);
    console.log('Submitted email:', startTime);
    console.log('Submitted email:', endTime);
    console.log('Submitted email:', eventType);
    console.log('Submitted email:', description);
    console.log('Submitted email:', links);
    console.log('Submitted email:', organization);
    console.log('Submitted email:', cost);
    console.log('Submitted email:', eventCapacity);
    console.log('Submitted email:', location);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Create your own event</h1>

        {/* Row 1 */}
        <div className="form-row">
          <label>Email <span className="required">*</span></label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Row 2 */}
        <div className="form-row">
        <div>
            <label>Start Date <span className="required">*</span></label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>End Date<span className="required">*</span></label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Start Time <span className="required">*</span></label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label>End Time <span className="required">*</span></label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
          
        </div>

        {/* Row 3 */}
        <div className="form-row">
          <div>
            <label >Event Type <span className="required">*</span></label>
            <select 
              className="event-type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              required
            >
              <option value="">--Select--</option>
              <option value="Social">Social</option>
              <option value="Hobby">Hobby</option>
              <option value="Workshop">Workshop</option>
              <option value="Fitness">Fitness</option>
            </select>
          </div>
          <div>
            <label>Location <span className="required">*</span></label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Cost</label>
            <input
              type="text"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <div>
            <label>Links</label>
            <input
              type="text"
              value={links}
              onChange={(e) => setLinks(e.target.value)}
            />
          </div>
        </div>

        {/* Optional Fields */}
        <div className="form-row">
          <div>
            <label>Organization <span className="required">*</span></label>
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Event Capacity</label>
            <input
              type="text"
              value={eventCapacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
        </div>
        {/* Row 4 */}
        <div className="form-row">
          <label>Description <span className="required">*</span></label>
          <textarea
            className="large-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
