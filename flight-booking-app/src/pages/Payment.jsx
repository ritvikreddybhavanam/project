import  { useEffect } from "react";
import "../assets/styles/Payment.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Stepper from "../components/Stepper.jsx";
import {useNavigate} from "react-router-dom";

export default function Payment() {

    const navigate = useNavigate();

    useEffect(() => {
        // input focus effect
        const inputs = document.querySelectorAll("input");

        const handleFocus = (e) => {
            e.target.closest(".input-wrapper")?.classList.add("active-border");
        };

        const handleBlur = (e) => {
            e.target.closest(".input-wrapper")?.classList.remove("active-border");
        };

        inputs.forEach((input) => {
            input.addEventListener("focus", handleFocus);
            input.addEventListener("blur", handleBlur);
        });

        // radio selection effect
        const radios = document.querySelectorAll("input[type='radio']");

        const handleChange = (e) => {
            document.querySelectorAll(".payment-option").forEach((el) => {
                el.classList.remove("selected");
            });

            if (e.target.checked) {
                e.target.closest(".payment-option").classList.add("selected");
            }
        };

        radios.forEach((radio) => radio.addEventListener("change", handleChange));

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("focus", handleFocus);
                input.removeEventListener("blur", handleBlur);
            });
            radios.forEach((radio) =>
                radio.removeEventListener("change", handleChange)
            );
        };
    }, []);

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
                                <span className="material-symbols-outlined">add_card</span>
                                <h3>Credit or Debit Card</h3>
                                <div className="card-icons">
                                    <span>VISA</span>
                                    <span>MC</span>
                                </div>
                            </div>

                            <div className="form">

                            <label>Card Number</label>
                                <div className="input-wrapper">
                                    <input placeholder="XXXX XXXX XXXX XXXX" />
                                </div>

                                <div className="row">
                                    <div>
                                        <label>Expiry</label>
                                        <div className="input-wrapper">
                                            <input placeholder="MM / YY" />
                                        </div>
                                    </div>

                                    <div>
                                        <label>CVV</label>
                                        <div className="input-wrapper">
                                            <input type="password" placeholder="***" />
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
                        <h4>SKYWARD AIR - SA-402</h4>
                        <div className="route">
                            <span>JFK</span>
                            <span>LHR</span>
                        </div>
                    </div>

                    <div className="details">
                        <p><b>Passenger:</b> Jonathan Sterling</p>
                        <p><b>Seat:</b> 4A (Business)</p>
                    </div>

                    <div className="price">
                        <p>Base Fare: $840</p>
                        <p>Taxes: $129.50</p>
                    </div>

                    <div className="total">
                        <h3>Total: $969.50</h3>
                    </div>

                    <button className="pay-btn" onClick={() => navigate("/success")}>Complete Payment</button>

                </div>

            </main>
            <Footer />
        </div>
    );
}