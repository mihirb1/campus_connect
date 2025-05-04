import './Filter.css';
import LocationAutocomplete from './LocationAutocomplete';

// filters is an array of event attributes, passed from Event
// setFilters is a useState
// we need to define type structure b/c of TypeScript
type FilterProps = {
  filters: {
    eventType: string;
    location: string;
    startDate: string;
    organization: string;
    capacity: number;
  };
  setFilters: (filters: any) => void;
};

const Filter = ({ filters, setFilters }: FilterProps) => {
  return (
      <div className="filters">
        <div className="filter">
          <label>Event Type</label>
          <select
            className="event-type"
            value={filters.eventType}
            // copies everything from the current filters value, then replaces the eventType value
            onChange = {(e) => setFilters({...filters, eventType: e.target.value})}
          >
            <option value="">--Select--</option>
            <option value="Social">Social</option>
            <option value="Academic">Academic</option>
            <option value="Workshop">Workshop</option>
            <option value="Fitness">Fitness</option>
            <option value="Hobby">Hobby</option>
          </select>
        </div>

        <div className="filter">
          <label>Location</label>
          <LocationAutocomplete
            value={filters.location}
            onChange={(value: string) => setFilters({ ...filters, location: value })}
            required
            placeholder="Enter a location"
          />
        </div>

        <div className="filter">
          <label>Date</label>
          <input
            type="date"
            value={filters.startDate}
            onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
          />
        </div>

        <div className="filter">
          <label>Organization</label>
          <input
            type="text"
            value={filters.organization}
            onChange={(e) => setFilters({ ...filters, organization: e.target.value })}
          />
        </div>

        <div className="filter">
          <label>Event Capacity</label>
          <input
            type="number"
            min={0}
            value={filters.capacity}
            onChange={(e) => setFilters({ ...filters, capacity: parseInt(e.target.value || '0') })}
          />
        </div>
      </div>
  );
};

export default Filter;
