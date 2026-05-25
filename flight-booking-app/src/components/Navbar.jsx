import "../assets/styles/Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="logo">
                <h2 onClick={() => navigate("/")}>SkyGuide</h2>
            </div>
            <div className="nav">
                <ul>
                    <li><a href="#" onClick={() => navigate("/flights")}>Flights</a></li>
                    <li><a href="#" onClick={() => navigate("/previousbookings")}>My Bookings</a></li>
                    <li><a href="#" onClick={() => navigate("/support")}>Support</a></li>
                </ul>
            </div>
            <div className="user">
                <input type="text" placeholder="Search Bookings.." className="search-input"/>
                <span className="material-symbols-outlined" onClick={() => navigate("/register")} style={{ cursor: "pointer"}}>account_circle</span>
            </div>
        </div>
    );
}