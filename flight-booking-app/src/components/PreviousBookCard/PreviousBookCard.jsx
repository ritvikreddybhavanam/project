import "./PreviousBookCard.css";

import { Eye, Download } from "lucide-react";

export default function PreviousBookCard({ booking }) {

    return (

        <div className="ticket-wrapper">

            {/* TOP AREA */}

            <div className="ticket-header-area">

                {/* AIRLINE DETAILS */}

                <div className="ticket-airline-section">

                    <div className="ticket-airline-logo">

                        {booking?.flight?.logo ? (
                            <img
                                src={booking.flight.logo}
                                alt="logo"
                                className="ticket-logo-img"
                            />
                        ) : (
                            "✈"
                        )}

                    </div>

                    <div className="ticket-airline-content">

                        <h2 className="ticket-airline-name">
                            {booking?.flight?.airline}
                        </h2>

                        <p className="ticket-flight-info">

                            FLIGHT
                            {" "}
                            {booking?.flight?.flightNumber || "SW-452"}
                            {" • "}
                            ECONOMY

                        </p>

                        <span className="ticket-pnr">

                            PNR:
                            {" "}
                            {booking?.id?.slice(0, 8).toUpperCase()}

                        </span>

                    </div>

                </div>

                {/* ROUTE */}

                <div className="ticket-route-section">

                    {/* FROM */}

                    <div className="ticket-airport-box">

                        <h1>
                            {booking?.flight?.from}
                        </h1>

                        <p>
                            Departure
                        </p>

                        <span>
                            {booking?.flight?.departureTime}
                        </span>

                    </div>

                    {/* CENTER */}

                    <div className="ticket-flight-path">

                        <div className="ticket-path-line"></div>

                        <div className="ticket-plane-icon">
                            ✈
                        </div>

                        <p>
                            {booking?.flight?.duration}
                        </p>

                    </div>

                    {/* TO */}

                    <div className="ticket-airport-box">

                        <h1>
                            {booking?.flight?.to}
                        </h1>

                        <p>
                            Arrival
                        </p>

                        <span>
                            {booking?.flight?.arrivalTime}
                        </span>

                    </div>

                </div>

                {/* STATUS */}

                <div className="ticket-status-section">

                    <div className="ticket-confirmed-badge">
                        ● CONFIRMED
                    </div>

                    <div className="ticket-date-box">

                        <p>PASSENGER</p>

                        <h3>

                            {booking?.passenger?.firstName}
                            {" "}
                            {booking?.passenger?.lastName}

                        </h3>

                    </div>

                </div>

            </div>

            {/* BOTTOM AREA */}

            <div className="ticket-footer-area">

                {/* ACTIONS */}

                <div className="ticket-actions">

                    <button className="ticket-action-btn">

                        <Eye size={16} />

                        View Details

                    </button>

                    <button className="ticket-action-btn">

                        <Download size={16} />

                        Download Ticket

                    </button>

                </div>

                {/* MANAGE */}

                <button className="ticket-manage-btn">

                    Seat:
                    {" "}
                    {booking?.selectedSeat?.id}

                </button>

            </div>

        </div>
    );
}