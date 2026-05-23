import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FlightCard from "../components/FlightCard.jsx";

import "../assets/styles/Flights.css";

export default function Flights() {
  const flights = [
    {
      airline: "Global Connect",
      logo: "https://picsum.photos/60",
      departureTime: "09:00 PM",
      arrivalTime: "09:10 AM",
      from: "JFK",
      to: "LHR",
      duration: "8h 10m",
      price: 890,
    },

    {
      airline: "SkyJet Airways",
      logo: "https://picsum.photos/61",
      departureTime: "07:30 AM",
      arrivalTime: "01:45 PM",
      from: "DEL",
      to: "DXB",
      duration: "4h 15m",
      price: 520,
    },

    {
      airline: "Blue Wings",
      logo: "https://picsum.photos/62",
      departureTime: "11:00 PM",
      arrivalTime: "06:20 AM",
      from: "HYD",
      to: "SIN",
      duration: "6h 20m",
      price: 760,
    },
  ];

  return (
    <div className="page">
      <Navbar />

      <div className="flights-container">
        <section className="flights-section">
          {/* SORT BAR */}

          <div className="sort-bar">
            <p>{flights.length} flights found</p>

            <div className="sort-options">
              <span>SORT BY</span>

              <select>
                <option>Cheapest First</option>
                <option>Fastest</option>
                <option>Best Value</option>
              </select>
            </div>
          </div>

          {/* FLIGHT CARDS */}

          {flights.map((flight, index) => (
            <FlightCard key={index} flight={flight} />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}
