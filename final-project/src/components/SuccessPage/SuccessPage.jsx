import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  const [event, setEvent] = useState(null); //starts as empty!

  useEffect(() => {
    const eventName = localStorage.getItem("eventName"); //checks for string equaling key eventName
    if (eventName) {
      const storedEvents = JSON.parse(localStorage.getItem("events")) || [];//gets the local storage strings and turns it into array
      const foundEvent = storedEvents.find((e) => e.name === eventName); //returns matching data
      setEvent(foundEvent || null); //either sets it correctly or returns null due to no match being found
    }
  }, []);

  return (
    <div className="page-content">
      <h1>Success!</h1>
      {event ? (
        <div>
          <h2>{event.name}</h2>
          <p>Location: {event.location}</p>
          <p>Day: {event.day}</p>
          <p>Capacity: {event.capacity}</p>
          <p>Description: {event.description}</p>
          <Link to="/eventinfo" className="event-button">
            Back to Events
          </Link>
        </div>
      ) : (
        <p>No event data available.</p>
      )}
    </div>
  );
}
//standard html key-value stuff, plus some fun ternary or however you might spell that word.