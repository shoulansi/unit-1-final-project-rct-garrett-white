import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessButton from "../Buttons/SuccessButton/SuccessButton";

export default function CreateEvent() {
  const navigate = useNavigate();
  const [newEvent, setNewEvent] = useState({ //original data state
    name: "",
    location: "",
    day: "Monday",
    capacity: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({...prev, [name]: value,
    })); //for each input replace old data with new data!
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEvents = JSON.parse(localStorage.getItem("events")) || []; //local storage checks
    storedEvents.push(newEvent); //sends new event
    localStorage.setItem("events", JSON.stringify(storedEvents));
    localStorage.setItem("eventName", newEvent.name); // Store event name
    navigate("/success");
  };

  return (
    <div className="page-content">
      <div className="page">
        <h2>Create New Event</h2>

        <form id="form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            value={newEvent.name}
            onChange={handleChange}
            placeholder="Event Name"
            required
          />

          <input
            type="text"
            name="location"
            value={newEvent.location}
            onChange={handleChange}
            placeholder="Event Location"
            required
          />
            <select name="day" value={newEvent.day} onChange={handleChange}>

                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>

            </select>

          <input
            type="number"
            name="capacity"
            value={newEvent.capacity}
            onChange={handleChange}
            placeholder="Max Capacity"
            required
          />

          <textarea
            name="description"
            value={newEvent.description}
            onChange={handleChange}
            placeholder="Event Description"
            maxLength={300}
          />

          <SuccessButton />

        </form>
      </div>
    </div>
  );
}
//very simple html stuff