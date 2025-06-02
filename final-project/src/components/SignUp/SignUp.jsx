import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessButton from "../Buttons/SuccessButton/SuccessButton";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ //probably the most annoying file so here we go...
    name: "",
    phone: "",
    email: "",
  });
//contains original state of data
  const eventName = localStorage.getItem("eventName");
//grabs the name of the event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ //goes through form input and updates the use state using a copy of the previous state.
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //stops page from refreshing
    const userData = { ...formData, eventName }; //preparing a change

    let existingUsers = JSON.parse(localStorage.getItem("userData")); //puts localstorage user into arrays

    if (!Array.isArray(existingUsers)) { //if its an array its good, if it's not it becomes an empty array
      existingUsers = [];
    }

  existingUsers.push(userData); //adds new user to array

    localStorage.setItem("userData", JSON.stringify(existingUsers)); //stores new list in localstorage

    navigate("/success");
  };

  return (
    <div className="page-content">
      <h2>Sign Up for {eventName || "the Event"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <SuccessButton />
      </form>
    </div>
  );
}
//pretty simple html stuff