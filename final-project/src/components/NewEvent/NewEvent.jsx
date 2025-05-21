import SuccessButton from "../SuccessButton/SuccessButton";

export default function NewEvent () {
    return (
        <div id="addevent">
            <h2>Create New Event</h2>
            <input type="text" name="name" placeholder="Please Enter Event Name"></input>
            <input type="text" name="location" placeholder="Please Enter Event Location"></input>
            <input type="text" name="capacity" placeholder="Please Enter Max Capacity"></input>
            <textarea></textarea>
            <SuccessButton />
        </div>
    );
};