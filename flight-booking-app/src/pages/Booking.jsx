import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stepper from "../components/Stepper";
import "../assets/styles/Booking.css";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Booking() {

    const location = useLocation();
    const navigate = useNavigate();

    const flight = location.state?.flight;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        passport: "",
        email: "",
        phone: ""
    });

    // HANDLE INPUT CHANGE

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    // VALIDATION

    const validateForm = () => {

        if (!formData.firstName.trim()) {
            alert("First name is required");
            return false;
        }

        if (!formData.lastName.trim()) {
            alert("Last name is required");
            return false;
        }

        if (!formData.dob) {
            alert("Date of birth is required");
            return false;
        }

        if (!formData.passport.trim()) {
            alert("Passport number is required");
            return false;
        }

        if (!formData.email.includes("@")) {
            alert("Enter valid email");
            return false;
        }

        if (formData.phone.length < 10) {
            alert("Enter valid phone number");
            return false;
        }

        return true;
    };

    // BUTTON FUNCTION

    const handleProceed = () => {

        const isValid = validateForm();

        if (!isValid) return;

        navigate("/seat-selection", {
            state: {
                flight,
                passenger: formData
            }
        });

    };

    return (

        <div className="booking-page">

            <Navbar />

            <main className="booking-container">

                {/* LEFT SIDE */}

                <div className="booking-left">

                    <Stepper step={2} />

                    <div className="form-card">

                        <h2>Passenger Details</h2>

                        <div className="form-grid">

                            <div>
                                <label>First Name</label>

                                <input
                                    type="text"
                                    placeholder="John"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Last Name</label>

                                <input
                                    type="text"
                                    placeholder="Doe"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Date of Birth</label>

                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Passport Number</label>

                                <input
                                    type="text"
                                    placeholder="Enter passport number"
                                    name="passport"
                                    value={formData.passport}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Email</label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Phone Number</label>

                                <input
                                    type="text"
                                    placeholder="+1 123456789"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
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

                                <img
                                    src={flight?.logo}
                                    alt="airline"
                                />

                                <div>
                                    <h4>{flight?.airline}</h4>
                                    <p>Economy Class</p>
                                </div>

                            </div>

                            <div className="booking-route">

                                <div>
                                    <h1>{flight?.from}</h1>
                                    <p>{flight?.departureTime}</p>
                                </div>

                                <div className="booking-route-line">

                                    <span>{flight?.duration}</span>

                                    <div></div>

                                    <p>DIRECT</p>

                                </div>

                                <div>
                                    <h1>{flight?.to}</h1>
                                    <p>{flight?.arrivalTime}</p>
                                </div>

                            </div>

                            <div className="booking-price">

                                <div>
                                    <span>Flight Price</span>
                                    <p>${flight?.price}</p>
                                </div>

                                <div>
                                    <span>Taxes</span>
                                    <p>$84</p>
                                </div>

                            </div>

                            <div className="booking-total">

                                <span>Total</span>

                                <h2>
                                    ${flight ? flight.price + 84 : 0}
                                </h2>

                            </div>

                        </div>

                    </div>

                    <button
                        onClick={handleProceed}
                        className="booking-seat-btn"
                    >
                        Proceed to Seat Selection
                    </button>

                </aside>

            </main>

            <Footer />

        </div>
    );
}