import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FlightCard from "../../components/FlightCard/FlightCard.jsx";

import "./Flights.css";

import { db } from "../../firebase.js";

import {
  collection,
  getDocs
} from "firebase/firestore";

export default function Flights() {

  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const querySnapshot = await getDocs(
            collection(db, "Flights")
        );
        const flightsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFlights(flightsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFlights();
  }, []);

  return (

      <div className="page">

        <Navbar />

        <div className="flights-container">

          <section className="flights-section">

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

            {flights.map((flight) => (
                <FlightCard
                    key={flight.id}
                    flight={flight}
                />
            ))}

          </section>

        </div>

        <Footer />

      </div>
  );
}