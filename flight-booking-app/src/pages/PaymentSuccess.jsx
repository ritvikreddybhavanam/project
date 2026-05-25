import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/PaymentSuccess.css";

import { useLocation } from "react-router-dom";

export default function PaymentSuccess() {

    const location = useLocation();

    // GET DATA

    const flight = location.state?.flight;
    const passenger = location.state?.passenger;
    const selectedSeat = location.state?.selectedSeat;
    const totalPrice = location.state?.totalPrice;

    return (

        <div className="booking-success-page">

            <Navbar />

            <main className="success-container">

                {/* SUCCESS HEADER */}

                <section className="success-header">

                    <div className="checkmark">
                        <span className="material-symbols-outlined">
                            check_circle
                        </span>
                    </div>

                    <h1>Booking Confirmed</h1>

                    <div className="pnr-box">
                        PNR: SG-982341
                    </div>

                    <p>
                        Your booking is successful. A confirmation email has
                        been sent to
                        <span>
                            {" "}
                            {passenger?.email}
                        </span>
                    </p>

                </section>

                {/* CONTENT */}

                <div className="success-grid">

                    {/* LEFT SIDE */}

                    <div className="left-column">

                        {/* PASSENGER CARD */}

                        <div className="info-card">

                            <h2>
                                <span className="material-symbols-outlined">
                                    person
                                </span>
                                Passenger Details
                            </h2>

                            <div className="info-row">

                                <span>Name</span>

                                <b>
                                    {passenger?.firstName} {" "}
                                    {passenger?.lastName}
                                </b>

                            </div>

                            <div className="info-row">
                                <span>Email</span>
                                <b>{passenger?.email}</b>
                            </div>

                            <div className="info-row">
                                <span>Phone</span>
                                <b>{passenger?.phone}</b>
                            </div>

                        </div>

                        {/* FLIGHT CARD */}

                        <div className="info-card">

                            <h2>
                                <span className="material-symbols-outlined">
                                    flight_takeoff
                                </span>
                                Flight Summary
                            </h2>

                            <div className="flight-top">

                                <div>
                                    <p className="label">
                                        {flight?.airline}
                                    </p>

                                    <h3>
                                        {flight?.from} → {flight?.to}
                                    </h3>
                                </div>

                                <div className="date-box">
                                    <p className="label">DURATION</p>
                                    <h3>{flight?.duration}</h3>
                                </div>

                            </div>

                            <div className="route-box">

                                <div className="airport">
                                    <h1>{flight?.from}</h1>
                                    <p>{flight?.departureTime}</p>
                                </div>

                                <div className="flight-line">
                                    <span className="material-symbols-outlined">
                                        flight
                                    </span>
                                </div>

                                <div className="airport">
                                    <h1>{flight?.to}</h1>
                                    <p>{flight?.arrivalTime}</p>
                                </div>

                            </div>

                        </div>

                        {/* DOWNLOAD BUTTON */}

                        <button className="download-btn">

                            <span className="material-symbols-outlined">
                                download
                            </span>

                            Download Ticket

                        </button>

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="ticket-card">

                        {/* LEFT TICKET */}

                        <div className="ticket-main">

                            <div className="ticket-header">

                                <div>
                                    <h2>{flight?.airline}</h2>
                                    <p>BOARDING PASS • ECONOMY CLASS</p>
                                </div>

                                <span className="material-symbols-outlined plane-icon">
                                    flight_takeoff
                                </span>

                            </div>

                            <div className="ticket-grid">

                                <div>
                                    <p className="small-label">PASSENGER</p>

                                    <h3>
                                        {passenger?.lastName?.toUpperCase()}
                                        {" / "}
                                        {passenger?.firstName?.toUpperCase()}
                                    </h3>
                                </div>

                                <div>
                                    <p className="small-label">FLIGHT</p>

                                    <h3>
                                        {flight?.airline}
                                    </h3>
                                </div>

                                <div>
                                    <p className="small-label">FROM</p>

                                    <h1>{flight?.from}</h1>

                                    <span>
                                        Departure
                                    </span>
                                </div>

                                <div>
                                    <p className="small-label">TO</p>

                                    <h1>{flight?.to}</h1>

                                    <span>
                                        Arrival
                                    </span>
                                </div>

                            </div>

                            <div className="ticket-footer">

                                <div>
                                    <p className="small-label">
                                        GATE
                                    </p>

                                    <h2>B12</h2>
                                </div>

                                <div className="middle-border">

                                    <p className="small-label">
                                        SEAT
                                    </p>

                                    <h2 className="seat">
                                        {selectedSeat?.id}
                                    </h2>

                                </div>

                                <div>
                                    <p className="small-label">
                                        TOTAL
                                    </p>

                                    <h2>
                                        ${totalPrice?.toFixed(2)}
                                    </h2>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT QR */}

                        <div className="ticket-qr">

                            <div className="qr-box">

                                <img
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${selectedSeat?.id}`}
                                    alt="QR"
                                />

                            </div>

                            <div className="departure-time">

                                <p>DEPARTURE TIME</p>

                                <h3>
                                    {flight?.departureTime}
                                </h3>

                            </div>

                            <span className="ticket-code">
                                {selectedSeat?.id}
                            </span>

                        </div>

                    </div>

                </div>

            </main>

            <Footer />

        </div>
    );
}