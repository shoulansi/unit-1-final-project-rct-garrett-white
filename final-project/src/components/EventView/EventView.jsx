import { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import { Link } from "react-router-dom";
import "react-modern-drawer/dist/index.css";

export default function EventView() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null); //intiliazation of all use states... yikes.
  const [attendees, setAttendees] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
    setFilteredEvents(storedEvents); //collecting localstorage data titled events
  }, []);

  const handleDayFilterChange = (e) => {
    const day = e.target.value;
    setSelectedDay(day); //allows for filtering of events by day of the week
    if (day) {
      setFilteredEvents(events.filter((event) => event.day === day));
    } else {
      setFilteredEvents(events);
    }
  };

  
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    const allUsers = JSON.parse(localStorage.getItem("userData")) || []; //the data of who signed up
    const eventAttendees = allUsers.filter((user) => user.eventName === event.name); //too many button clicks....
    setAttendees(eventAttendees); //changes the use state of attendees to the value of allUsers(names of people who signed up)
    setIsDrawerOpen(true); //on click opens drawer
  };

 
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedEvent(null); //this closes the drawer
    setAttendees([]);
  };

 
  const handleDelete = (eventName) => {
    const updatedEvents = events.filter((event) => event.name !== eventName);
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents);//this updates and removes event from the list... and also closes the drawer.
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    closeDrawer();
  };

  return (
    <div className="page-content">
      <h2>Upcoming Events</h2>

      <select onChange={handleDayFilterChange} value={selectedDay}> 
        <option value="">All Days</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option> 
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>


      <div className="event-list">
        {filteredEvents.map((event, index) => (
          <div key={index} className="event-item">
            <h3>{event.name}</h3>
            <button onClick={() => handleEventClick(event)}>View Details</button>
          </div>
        ))}
      </div>

      <Drawer open={isDrawerOpen} onClose={closeDrawer} direction="right" className="drawer">
        {selectedEvent && (
          <div className="drawer-content">
            <h3>{selectedEvent.name}</h3>
            <table className="event-table">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Day</th>
                  <th>Capacity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedEvent.location}</td>
                  <td>{selectedEvent.day}</td>
                  <td>{selectedEvent.capacity}</td>
                </tr>
              </tbody>
            </table>

            <div className="event-description">
              <p>{selectedEvent.description}</p>
            </div>

            <div className="attendees-list">
              <h4>Attendees:</h4>
              <ul>
                {attendees.length > 0 ? (
                  attendees.map((attendee, index) => (
                    <li key={index}>{attendee.name}</li>
                  ))
                ) : (
                  <li>No attendees yet.</li>
                )}
              </ul>
            </div>

            <div className="action-buttons">
              <Link to="/waiver" className="sign-up-button">
                Sign Up
              </Link>
              <button className="btn-delete" onClick={() => handleDelete(selectedEvent.name)}>
                Delete Event
              </button>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}
//theres a lot happening here. including all html info to render info as in filtering by day and what appears when you open a drawer. also contains my buttons to sign up and delete events. messy folder... ternary operator fun though