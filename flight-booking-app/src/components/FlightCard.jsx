import "../assets/styles/FlightCard.css";
import { useNavigate } from "react-router-dom";

export default function FlightCard({ flight }) {

    const navigate = useNavigate();

    const handleBooking = () => {

        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (!isLoggedIn) {

            alert("Please login to book flights");

            navigate("/login");

            return;
        }

        navigate("/booking", {
            state: { flight }
        });
    };


    return (

        <div className="flight-card">

            {/* LEFT */}

            <div className="flight-left">

                <img
                    src={flight.logo}
                    alt="airline"
                />

                <p>{flight.airline}</p>

            </div>

            {/* CENTER */}

            <div className="flight-center">

                <div className="flight-time">
                    <h2>{flight.departureTime}</h2>
                    <span>{flight.from}</span>
                </div>

                <div className="flight-duration">

                    <p>{flight.duration}</p>

                    <div className="line">
                        <span className="dot"></span>
                    </div>

                    <span className="direct">
            DIRECT
          </span>

                </div>

                <div className="flight-time">
                    <h2>{flight.arrivalTime}</h2>
                    <span>{flight.to}</span>
                </div>

            </div>

            {/* RIGHT */}

            <div className="flight-right">

                <p>Economy</p>

                <h1>${flight.price}</h1>

                <button onClick={handleBooking}>
                    SELECT FLIGHT
                </button>

            </div>

        </div>
    );
}