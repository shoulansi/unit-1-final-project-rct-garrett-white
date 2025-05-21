import ReturnButton from "../ReturnButton/ReturnButton";
import SuccessButton from "../SuccessButton/SuccessButton";

export default function SignUp () {
    return (
        <div>
            <input type="text" name="name" placeholder="Please Enter Your Name" required/>
            <input type="text" name="phone" placeholder="Please Enter Your Phone Number" required/>
            <input type="email" name="email" placeholder="Please Enter Your Email" required/>
            <SuccessButton/>
        </div>
    );
};