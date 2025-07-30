import "../App.css";
import { Link } from "react-router-dom";
import { useOnlineStatuse } from "../Day18/useOnlineStatus";

export default function List() {
    const online = useOnlineStatuse();

    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item"><strong>Day 16/17/18</strong></li>
                <li className="nav-item">
                    <Link to="/" className="nav-links">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Counter" className="nav-links">
                        Counter
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Toggle" className="nav-links">
                        Toggle
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Form" className="nav-links">
                        Form
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/TextArea" className="nav-links">
                        TextArea
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ClickOutside" className="nav-links">
                        ClickOutside
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Weather" className="nav-links">
                        Weather App
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Timer" className="nav-links">
                        Timer App
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/QuoteGenerator" className="nav-links">
                        QuoteGenerator App
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Gallery" className="nav-links">
                        Gallay
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/ProfileCard" className="nav-links">
                        ProfileCard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/FormYUP" className="nav-links">
                        FormYUP
                    </Link>
                </li>
                <li className="nav-item status">
                    <span className="status-value">
                        {online ? " Online" : " Offline"}
                    </span>
                </li>
            </ul>
        </nav>
    );
}