import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/PaymentSuccess.css";

export default function PaymentSuccess() {
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
                        <span> sterling.j@example.com</span>
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
                                <b>Mr. Jonathan Sterling</b>
                            </div>

                            <div className="info-row">
                                <span>Nationality</span>
                                <b>United States</b>
                            </div>

                            <div className="info-row">
                                <span>Frequent Flyer</span>
                                <b>SG-Gold-9234</b>
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
                                    <p className="label">SKYWARD AIR</p>
                                    <h3>SA-402</h3>
                                </div>

                                <div className="date-box">
                                    <p className="label">DATE</p>
                                    <h3>Oct 14, 2024</h3>
                                </div>

                            </div>

                            <div className="route-box">

                                <div className="airport">
                                    <h1>JFK</h1>
                                    <p>New York</p>
                                </div>

                                <div className="flight-line">
                                    <span className="material-symbols-outlined">
                                        flight
                                    </span>
                                </div>

                                <div className="airport">
                                    <h1>LHR</h1>
                                    <p>London</p>
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
                                    <h2>Skyward Air</h2>
                                    <p>BOARDING PASS • BUSINESS CLASS</p>
                                </div>

                                <span className="material-symbols-outlined plane-icon">
                                    flight_takeoff
                                </span>

                            </div>

                            <div className="ticket-grid">

                                <div>
                                    <p className="small-label">PASSENGER</p>
                                    <h3>STERLING / JONATHAN</h3>
                                </div>

                                <div>
                                    <p className="small-label">FLIGHT</p>
                                    <h3>SA 402</h3>
                                </div>

                                <div>
                                    <p className="small-label">FROM</p>
                                    <h1>JFK</h1>
                                    <span>NEW YORK, USA</span>
                                </div>

                                <div>
                                    <p className="small-label">TO</p>
                                    <h1>LHR</h1>
                                    <span>LONDON, UK</span>
                                </div>

                            </div>

                            <div className="ticket-footer">

                                <div>
                                    <p className="small-label">GATE</p>
                                    <h2>B12</h2>
                                </div>

                                <div className="middle-border">
                                    <p className="small-label">SEAT</p>
                                    <h2 className="seat">4A</h2>
                                </div>

                                <div>
                                    <p className="small-label">BOARDING</p>
                                    <h2>07:45</h2>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT QR */}

                        <div className="ticket-qr">

                            <div className="qr-box">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SG982341004A"
                                    alt="QR"
                                />
                            </div>

                            <div className="departure-time">
                                <p>DEPARTURE TIME</p>
                                <h3>08:30 AM</h3>
                            </div>

                            <span className="ticket-code">
                                SG982341004A
                            </span>

                        </div>

                    </div>

                </div>

            </main>

            <Footer />

        </div>
    );
}