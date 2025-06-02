import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Waiver() {
  const navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false); //starting checkbox unmarked

  const handleCheckboxChange = () => {
    setIsAgreed(prev => !prev); //when the user interacts with the checkbox this changes the value of IsAgreed
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //once again keeps page from refreshing from form.
    if (isAgreed) {
      navigate("/signup/:eventName", { state: { eventName: "Selected Event" } }); //if they agree take them to the sign up page
    } else {
      alert("You must agree to the waiver to proceed.");
    }
  };

  return (
    <div className="page-content">
        <div className="waiver-page">
      <h2>Waiver</h2>
      <form onSubmit={handleSubmit}>
        <p>This form contains information pertaining to a waiver, yes a waiver. Really. We do not be in trouble if you get hurt this is of your own accord. Please just be safe so we don't even need any sort of thinking ourselves because to be honest we hate doing that. So really don't be dumb and try to sue us either. This document says no to that. I hope this clarifies enough please don't think you can sue us for your own stupid actions. Rock climbing is unfortunately dangerous and things will happen, like missing the last step while walking down them and spraining your ankle bad... Whenever you step into an event you bring on the wrath of the whole universe. I hope you understand. Good luck, thanks for joining us.</p>
        <label>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={handleCheckboxChange}
          />
          I agree to the terms and conditions
        </label>
        <button type="submit" disabled={!isAgreed}>
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}
//regular html yes I was trying to be funny