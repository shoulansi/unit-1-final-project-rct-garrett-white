import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <h1>
                <a href="/newevent"><button>+</button></a>
                <a href="/">Rock Climb Together</a>
            </h1>
            <nav className="nav">
                <Link to="/about">About Us</Link>
            </nav>
        </header>
    );
};

export default Header;