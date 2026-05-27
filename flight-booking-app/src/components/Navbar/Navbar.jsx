import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
    const navigate = useNavigate();

    // check login status
    function isUserLoggedIn() {
        return auth.currentUser !== null;
    }

    // logout function
    async function logoutUser() {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Logout error:", error);
            alert("Unable to Logout");
        }
    }

    return (
        <div className="navbar">
            {/* LOGO */}
            <div className="logo">
                <h2 onClick={() => navigate("/")}>SkyGuide</h2>
            </div>

            {/* NAV LINKS */}
            <div className="nav">
                <ul>
                    <li>
                        <a onClick={() => navigate("/flights")}>
                            Flights
                        </a>
                    </li>

                    <li>
                        <a onClick={() => navigate("/previousbookings")}>
                            My Bookings
                        </a>
                    </li>

                    <li>
                        <a onClick={() => navigate("/support")}>
                            Support
                        </a>
                    </li>
                </ul>
            </div>

            {/* USER SECTION */}
            <div className="user">
                <input
                    type="text"
                    placeholder="Search Bookings.."
                    className="search-input"
                />

                {isUserLoggedIn() ? (
                    <span
                        className="material-symbols-outlined"
                        onClick={logoutUser}
                        style={{ cursor: "pointer" }}
                        title="Logout"
                    >
                        logout
                    </span>
                ) : (
                    <span
                        className="material-symbols-outlined"
                        onClick={() => navigate("/register")}
                        style={{ cursor: "pointer" }}
                        title="Login / Register"
                    >
                        account_circle
                    </span>
                )}
            </div>
        </div>
    );
}