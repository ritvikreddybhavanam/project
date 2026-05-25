import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/styles/SeatSelection.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stepper from "../components/Stepper.jsx";

export default function SeatSelection() {
    const basePrice = 969.5;
    const navigate = useNavigate();
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [upgradePrice, setUpgradePrice] = useState(0);

    const seats = [
        {
            row: 1,
            premium: true,
            seats: [
                { id: "1A", price: 120, unavailable: false },
                { id: "1B", price: 120, unavailable: false },
                { id: "1C", price: 120, unavailable: true },
                { id: "1D", price: 120, unavailable: false },
                { id: "1E", price: 120, unavailable: false },
                { id: "1F", price: 120, unavailable: false },
            ],
        },

        {
            row: 4,
            premium: false,
            seats: [
                { id: "4A", price: 0, unavailable: false },
                { id: "4B", price: 0, unavailable: false },
                { id: "4C", price: 0, unavailable: false },
                { id: "4D", price: 0, unavailable: true },
                { id: "4E", price: 0, unavailable: false },
                { id: "4F", price: 0, unavailable: false },
            ],
        },

        {
            row: 5,
            premium: false,
            seats: [
                { id: "5A", price: 0, unavailable: false },
                { id: "5B", price: 0, unavailable: false },
                { id: "5C", price: 0, unavailable: false },
                { id: "5D", price: 0, unavailable: false },
                { id: "5E", price: 0, unavailable: false },
                { id: "5F", price: 0, unavailable: false },
            ],
        },
    ];

    const handleSeatSelect = (seat) => {
        if (seat.unavailable) return;

        if (selectedSeat?.id === seat.id) {
            setSelectedSeat(null);
            setUpgradePrice(0);
            return;
        }

        setSelectedSeat(seat);
        setUpgradePrice(seat.price);
    };

    return (
        <div className="seat-page">
            <Navbar />

            <main className="seat-main">

                {/* PROGRESS BAR */}

               <div className="stepper-wrapper">
                   <Stepper step={3} />
               </div>

                <div className="seat-layout">

                    {/* LEFT SIDE */}

                    <div className="seat-section">

                        <div className="seat-card">

                            <div className="seat-header">
                                <h1>Select Your Seat</h1>
                                <p>Passenger: John Doe</p>
                            </div>

                            {/* LEGEND */}

                            <div className="seat-legend">

                                <div>
                                    <span className="legend-box"></span>
                                    <p>Economy</p>
                                </div>

                                <div>
                                    <span className="legend-box premium-box"></span>
                                    <p>Premium</p>
                                </div>

                                <div>
                                    <span className="legend-box unavailable-box"></span>
                                    <p>Unavailable</p>
                                </div>

                            </div>

                            {/* AIRCRAFT */}

                            <div className="aircraft">

                                {seats.map((rowData) => (
                                    <div className="seat-row" key={rowData.row}>

                                        <div className="seat-group">

                                            {rowData.seats.slice(0, 3).map((seat) => (
                                                <button
                                                    key={seat.id}
                                                    className={`
                            seat-btn
                            ${rowData.premium ? "premium-seat" : ""}
                            ${seat.unavailable ? "unavailable-seat" : ""}
                            ${selectedSeat?.id === seat.id ? "selected-seat" : ""}
                          `}
                                                    onClick={() => handleSeatSelect(seat)}
                                                >
                                                    {seat.id}
                                                </button>
                                            ))}

                                        </div>

                                        <div className="row-number">
                                            {rowData.row}
                                        </div>

                                        <div className="seat-group">

                                            {rowData.seats.slice(3).map((seat) => (
                                                <button
                                                    key={seat.id}
                                                    className={`
                            seat-btn
                            ${rowData.premium ? "premium-seat" : ""}
                            ${seat.unavailable ? "unavailable-seat" : ""}
                            ${selectedSeat?.id === seat.id ? "selected-seat" : ""}
                          `}
                                                    onClick={() => handleSeatSelect(seat)}
                                                >
                                                    {seat.id}
                                                </button>
                                            ))}

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* BUTTONS */}

                        <div className="seat-buttons">

                            <button className="back-btn" onClick={() => navigate("/booking")}>
                                ← Back
                            </button>

                            <button className="confirm-btn" onClick={() => navigate("/payment")}>
                                Confirm Seats →
                            </button>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <aside className="summary-card">

                        <div className="summary-top">
                            <h2>Flight Summary</h2>
                            <p>Skyward Air • SK-402</p>
                        </div>

                        <div className="route">

                            <div>
                                <h1>JFK</h1>
                                <p>New York</p>
                            </div>

                            <div className="route-line">
                                ✈
                            </div>

                            <div>
                                <h1>LHR</h1>
                                <p>London</p>
                            </div>

                        </div>

                        <div className="selected-seat-box">

                            <h3>Selected Seat</h3>

                            {selectedSeat ? (
                                <div className="seat-info">

                                    <div>
                                        <h4>{selectedSeat.id}</h4>
                                        <p>Standard Passenger</p>
                                    </div>

                                    <span>
                    {selectedSeat.price > 0
                        ? `+$${selectedSeat.price}`
                        : "Free"}
                  </span>

                                </div>
                            ) : (
                                <p className="no-seat">
                                    No seat selected yet
                                </p>
                            )}

                        </div>

                        <div className="price-box">

                            <div>
                                <span>Base Fare</span>
                                <span>$845.00</span>
                            </div>

                            <div>
                                <span>Seat Upgrade</span>
                                <span>${upgradePrice.toFixed(2)}</span>
                            </div>

                            <div>
                                <span>Taxes & Fees</span>
                                <span>$124.50</span>
                            </div>

                            <div className="total">
                                <span>Total</span>
                                <span>
                  ${(basePrice + upgradePrice).toFixed(2)}
                </span>
                            </div>

                        </div>

                    </aside>

                </div>

            </main>

            <Footer />
        </div>
    );
}