import "../assets/styles/BookingCard.css";

export default function BookingCard() {
    return (
        <div className="booking-card">
            <div className="booking-top">
                <div className="booking-id">
                    <div className="flight-icon">
                        <span className="material-symbols-outlined">flight</span>
                    </div>
                    <div>
                        <p className="status">CONFIRMED</p>
                        <p className="id">Booking ID: SG-88294721</p>
                    </div>
                </div>
                <div className="booking-date">
                    <h3>Dec 14, 2024</h3>
                    <p>Round Trip • Economy</p>
                </div>
            </div>
            <hr />
            <div className="flight-route">
                <div className="location">
                    <p className="city">NEW YORK</p>
                    <h1>JFK</h1>
                    <p>08:45 AM</p>
                </div>
                <div className="flight-center">
                    <p>7h 55m (Direct)</p>
                    <div className="flight-line">
                        <span className="material-symbols-outlined">
                            flight
                        </span>
                    </div>
                    <p>SkyLink Flight 402</p>
                </div>
                <div className="location right">
                    <p className="city">LONDON</p>
                    <h1>LHR</h1>
                    <p>09:40 PM</p>
                </div>
            </div>
            <hr />
            <div className="booking-bottom">
                <div className="booking-info">
                    <p>🪑 Seat 12A, 12B</p>
                    <p>🧳 2 x 23kg Check-in</p>
                </div>
                <div className="booking-buttons">
                    <button className="seat-btn">
                        Select Seat
                    </button>
                    <button className="ticket-btn">
                        View Ticket
                    </button>
                </div>
            </div>
        </div>
    );
}