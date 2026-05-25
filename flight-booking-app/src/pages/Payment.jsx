import { useState } from "react";

import "../assets/styles/Payment.css";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Stepper from "../components/Stepper.jsx";

import { auth, db } from "../firebase";

import {
    collection,
    addDoc,
    serverTimestamp,
} from "firebase/firestore";

import {
    useLocation,
    useNavigate,
} from "react-router-dom";

export default function Payment() {

    const navigate = useNavigate();
    const location = useLocation();

    // GET DATA FROM SEAT SELECTION PAGE

    const flight = location.state?.flight;
    const passenger = location.state?.passenger;
    const selectedSeat = location.state?.selectedSeat;
    const totalPrice = location.state?.totalPrice;

    // PAYMENT STATES

    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    // VALIDATION FUNCTION

    const validatePayment = () => {

        if (!cardNumber.trim()) {
            alert("Please enter card number");
            return false;
        }

        if (!expiryDate.trim()) {
            alert("Please enter expiry date");
            return false;
        }

        if (!cvv.trim()) {
            alert("Please enter CVV");
            return false;
        }

        // TEST CARD DETAILS

        if (
            cardNumber === "4532184766219084" &&
            expiryDate === "09/28" &&
            cvv === "472"
        ) {
            return true;
        }

        alert("Invalid card details");

        return false;
    };

    // PAYMENT SUCCESS

    const handleSuccess = async () => {

        const validPayment = validatePayment();

        if (!validPayment) return;

        try {

            const user = auth.currentUser;

            // CHECK LOGIN

            if (!user) {

                alert("Please login first");

                navigate("/login");

                return;
            }

            // SAVE BOOKING TO FIRESTORE

            await addDoc(collection(db, "bookings"), {

                userId: user.uid,

                flight: {
                    airline: flight?.airline,
                    from: flight?.from,
                    to: flight?.to,
                    departureTime: flight?.departureTime,
                    arrivalTime: flight?.arrivalTime,
                    duration: flight?.duration,
                    price: flight?.price,
                    logo: flight?.logo,
                },

                passenger: {
                    firstName: passenger?.firstName,
                    lastName: passenger?.lastName,
                    email: passenger?.email,
                    phone: passenger?.phone,
                },

                selectedSeat: {
                    id: selectedSeat?.id,
                    price: selectedSeat?.price,
                },

                totalPrice,

                createdAt: serverTimestamp(),
            });

            // NAVIGATE TO SUCCESS PAGE

            navigate("/success", {
                state: {
                    flight,
                    passenger,
                    selectedSeat,
                    totalPrice,
                },
            });

        } catch (error) {

            console.log(error);

            alert("Failed to save booking");
        }
    };

    // IF USER DIRECTLY OPENS PAYMENT PAGE

    if (!flight || !passenger) {

        return (

            <div>

                <Navbar />

                <div
                    style={{
                        padding: "100px",
                        textAlign: "center",
                    }}
                >
                    <h2>No booking data found</h2>

                    <button
                        onClick={() => navigate("/flights")}
                    >
                        Go To Flights
                    </button>
                </div>

                <Footer />

            </div>
        );
    }

    return (

        <div className="payment-page">

            <Navbar />

            <div className="step">
                <Stepper step={4} />
            </div>

            {/* MAIN CONTAINER */}

            <main className="payment-container">

                {/* LEFT SIDE */}

                <div className="left">

                    <div className="card">

                        <h2>Payment Methods</h2>

                        {/* CARD PAYMENT */}

                        <div className="section">

                            <div className="section-header">

                                <span className="material-symbols-outlined">
                                    add_card
                                </span>

                                <h3>Credit or Debit Card</h3>

                                <div className="card-icons">
                                    <span>VISA</span>
                                    <span>MC</span>
                                </div>

                            </div>

                            <div className="form">

                                {/* CARD NUMBER */}

                                <label>Card Number</label>

                                <div className="input-wrapper">

                                    <input
                                        type="text"
                                        placeholder="XXXX XXXX XXXX XXXX"
                                        value={cardNumber}
                                        onChange={(e) =>
                                            setCardNumber(e.target.value)
                                        }
                                    />

                                </div>

                                <div className="row">

                                    {/* EXPIRY */}

                                    <div>

                                        <label>Expiry</label>

                                        <div className="input-wrapper">

                                            <input
                                                type="text"
                                                placeholder="MM / YY"
                                                value={expiryDate}
                                                onChange={(e) =>
                                                    setExpiryDate(e.target.value)
                                                }
                                            />

                                        </div>

                                    </div>

                                    {/* CVV */}

                                    <div>

                                        <label>CVV</label>

                                        <div className="input-wrapper">

                                            <input
                                                type="password"
                                                placeholder="***"
                                                value={cvv}
                                                onChange={(e) =>
                                                    setCvv(e.target.value)
                                                }
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* OTHER OPTIONS */}

                        <div className="payment-options">

                            <label className="payment-option">
                                <input type="radio" name="pay" />
                                <span>UPI Payment</span>
                            </label>

                            <label className="payment-option">
                                <input type="radio" name="pay" />
                                <span>Net Banking</span>
                            </label>

                            <label className="payment-option">
                                <input type="radio" name="pay" />
                                <span>Digital Wallets</span>
                            </label>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="right">

                    <h2>Order Summary</h2>

                    <div className="flight-box">

                        <h4>
                            {flight?.airline}
                        </h4>

                        <div className="route">

                            <span>
                                {flight?.from}
                            </span>

                            <span>
                                {flight?.to}
                            </span>

                        </div>

                    </div>

                    <div className="details">

                        <p>
                            <b>Passenger:</b>
                            {" "}
                            {passenger?.firstName}
                            {" "}
                            {passenger?.lastName}
                        </p>

                        <p>
                            <b>Seat:</b>
                            {" "}
                            {selectedSeat?.id}
                        </p>

                    </div>

                    <div className="price">

                        <p>
                            Base Fare:
                            {" "}
                            ${flight?.price}
                        </p>

                        <p>
                            Seat Upgrade:
                            {" "}
                            ${selectedSeat?.price || 0}
                        </p>

                        <p>
                            Taxes:
                            {" "}
                            $84
                        </p>

                    </div>

                    <div className="total">

                        <h3>
                            Total:
                            {" "}
                            ${totalPrice?.toFixed(2)}
                        </h3>

                    </div>

                    <button
                        className="pay-btn"
                        onClick={handleSuccess}
                    >
                        Complete Payment
                    </button>

                </div>

            </main>

            <Footer />

        </div>
    );
}