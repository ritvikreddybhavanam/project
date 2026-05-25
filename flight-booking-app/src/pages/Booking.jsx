import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stepper from "../components/Stepper";
import "../assets/styles/Booking.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Booking() {

    const location = useLocation();
    const navigate = useNavigate();
    const flight = location.state?.flight;

    return (
        <div className="booking-page">

            <Navbar />

            <main className="booking-container">

                {/* LEFT SIDE */}
                <div className="booking-left">

                    {/* STEP PROGRESS */}
                    <Stepper step={2} />

                    {/* FORM */}
                    <div className="form-card">

                        <h2>Passenger Details</h2>

                        <div className="form-grid">

                            <div>
                                <label>First Name</label>
                                <input type="text" placeholder="John" />
                            </div>

                            <div>
                                <label>Last Name</label>
                                <input type="text" placeholder="Doe" />
                            </div>

                            <div>
                                <label>Date of Birth</label>
                                <input type="date" />
                            </div>

                            <div>
                                <label>Passport Number</label>
                                <input type="text" placeholder="Enter passport number" />
                            </div>

                            <div>
                                <label>Email</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label>Phone Number</label>
                                <input type="text" placeholder="+1 123456789" />
                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <aside className="booking-right">

                    <div className="summary-card">

                        <div className="summary-header">
                            <h3>Flight Summary</h3>
                            <span>Confirmed</span>
                        </div>

                        <div className="summary-content">

                            <div className="airline">
                                <img src={flight?.logo} alt="" />
                                <div>
                                    <h4>{flight?.airline}</h4>
                                    <p>Economy Class</p>
                                </div>
                            </div>

                            <div className="route">

                                <div>
                                    <h1>{flight?.from}</h1>
                                    <p>{flight?.departureTime}</p>
                                </div>

                                <div className="route-line">
                                    <span>{flight?.duration}</span>
                                    <div></div>
                                    <p>DIRECT</p>
                                </div>

                                <div>
                                    <h1>{flight?.to}</h1>
                                    <p>{flight?.arrivalTime}</p>
                                </div>

                            </div>

                            <div className="price">
                                <div>
                                    <span>Flight Price</span>
                                    <p>${flight?.price}</p>
                                </div>

                                <div>
                                    <span>Taxes</span>
                                    <p>$84</p>
                                </div>
                            </div>

                            <div className="total">
                                <span>Total</span>
                                <h2>${flight ? flight.price + 84 : 0}</h2>
                            </div>

                        </div>

                    </div>

                    <button
                        onClick={() => navigate("/seat-selection")}
                        className="seat-btn"
                    >
                        Proceed to Seat Selection
                    </button>

                </aside>

            </main>

            <Footer />

        </div>
    );
}