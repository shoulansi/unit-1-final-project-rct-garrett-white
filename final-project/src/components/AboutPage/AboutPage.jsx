import ReturnButton from "../Buttons/ReturnButton/ReturnButton";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

export default function AboutPage () {
    return (
        <div className="page-content">
            <div className="page">
                <h2>About Us</h2>
                <p>Welcome to Rock Climb Together. </p>
                <p>This is an application developed by me! Someone who loves rock climbing.</p>
                <div className="img-carousel">
                    <ImageCarousel />
                </div>
                <ReturnButton />
            </div>
        </div>
    );
};