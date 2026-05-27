// src/pages/Admin/AdminFlights.jsx

import { useEffect, useState } from "react";

import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar.jsx";

import "/src/pages/Admin/AdminFlights/AdminFlights.css";

import {
    Search,
    Bell,
    Mail,
    CircleHelp,
    Plus,
    Plane,
    TriangleAlert,
    ShieldCheck,
    Filter,
    Clock3,
    CalendarDays,
    RotateCcw,
    Pencil,
    Ban,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Wind,
} from "lucide-react";

import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../../../firebase.js";

export default function AdminFlights() {

    const [flights, setFlights] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchFlights = async () => {

            try {

                const flightsRef = collection(db, "Flights");

                const snapshot = await getDocs(flightsRef);

                const flightsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setFlights(flightsData);

            } catch (error) {

                console.error(
                    "Error fetching flights:",
                    error
                );

            } finally {

                setLoading(false);

            }
        };

        fetchFlights();

    }, []);

    const activeFlights = flights.length;

    const delayedFlights = flights.filter(
        (flight) =>
            flight.status?.toLowerCase() === "delayed"
    ).length;

    const onTimeFlights = flights.filter(
        (flight) =>
            flight.status?.toLowerCase() === "on time"
    ).length;

    const onTimePercentage =
        activeFlights > 0
            ? (
                (onTimeFlights / activeFlights) *
                100
            ).toFixed(1)
            : 0;

    return (

        <div className="af-layout">

            <AdminSidebar />

            {/* TOPBAR */}

            <header className="af-topbar">

                <div className="af-search-box">

                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search flight ID or route..."
                    />

                </div>

                <div className="af-top-icons">

                    <button>
                        <Bell size={20} />
                    </button>

                    <button>
                        <Mail size={20} />
                    </button>

                    <button>
                        <CircleHelp size={20} />
                    </button>

                </div>

            </header>

            {/* MAIN */}

            <main className="af-main">

                {/* HEADER */}

                <div className="af-header">

                    <div>

                        <h1>
                            Flights Management
                        </h1>

                        <p>
                            Oversee global flight schedules,
                            manage delays, and update
                            route capacities.
                        </p>

                    </div>

                    <button className="af-add-btn">

                        <Plus size={18} />

                        Add New Flight

                    </button>

                </div>

                {/* CARDS */}

                <div className="af-cards">

                    <div className="af-card">

                        <div>

                            <span>
                                ACTIVE FLIGHTS TODAY
                            </span>

                            <h2>
                                {loading
                                    ? "..."
                                    : activeFlights}
                            </h2>

                        </div>

                        <div className="af-card-icon af-blue">
                            <Plane size={32} />
                        </div>

                    </div>

                    <div className="af-card">

                        <div>

                            <span>
                                CURRENT DELAYS
                            </span>

                            <h2 className="af-danger-text">

                                {loading
                                    ? "..."
                                    : delayedFlights}

                            </h2>

                        </div>

                        <div className="af-card-icon af-red">
                            <TriangleAlert size={32} />
                        </div>

                    </div>

                    <div className="af-card">

                        <div>

                            <span>
                                ONTIME PERFORMANCE
                            </span>

                            <h2 className="af-cyan-text">

                                {loading
                                    ? "..."
                                    : `${onTimePercentage}%`}

                            </h2>

                        </div>

                        <div className="af-card-icon af-cyan">
                            <ShieldCheck size={32} />
                        </div>

                    </div>

                </div>

                {/* FILTERS */}

                <div className="af-filters">

                    <div className="af-filter-box">

                        <Filter size={16} />

                        <label>Airline:</label>

                        <select>

                            <option>
                                All Airlines
                            </option>

                            <option>
                                SkyGuide Air
                            </option>

                            <option>
                                Global Connect
                            </option>

                            <option>
                                Oceanic Express
                            </option>

                            <option>
                                Horizon Flyers
                            </option>

                        </select>

                    </div>

                    <div className="af-filter-box">

                        <Clock3 size={16} />

                        <label>Status:</label>

                        <select>

                            <option>
                                All Statuses
                            </option>

                            <option>
                                On Time
                            </option>

                            <option>
                                Delayed
                            </option>

                            <option>
                                Cancelled
                            </option>

                            <option>
                                Boarding
                            </option>

                        </select>

                    </div>

                    <div className="af-filter-box">

                        <CalendarDays size={16} />

                        <label>Date:</label>

                        <input type="date" />

                    </div>

                    <button className="af-reset-btn">

                        <RotateCcw size={16} />

                        Reset Filters

                    </button>

                </div>

                {/* TABLE */}

                <div className="af-table-wrapper">

                    <table className="af-table">

                        <thead>

                        <tr>

                            <th>Flight ID</th>

                            <th>Airline</th>

                            <th>Route</th>

                            <th>Departure</th>

                            <th>Status</th>

                            <th className="af-right">
                                Actions
                            </th>

                        </tr>

                        </thead>

                        <tbody>

                        {flights.map((flight, index) => (

                            <tr key={flight.id}>

                                <td>

                                    <span className="af-flight-code">

                                        {flight.flightId ||
                                            `FL-${index + 1001}`}

                                    </span>

                                </td>

                                <td>

                                    <div className="af-airline-box">

                                        <div
                                            className={`af-airline-logo ${
                                                index % 2 === 0
                                                    ? "af-blue"
                                                    : "af-orange"
                                            }`}
                                        >

                                            {flight.airline
                                                ?.substring(0, 2)
                                                ?.toUpperCase()}

                                        </div>

                                        <span>
                                            {flight.airline}
                                        </span>

                                    </div>

                                </td>

                                <td>

                                    <div className="af-route-box">

                                        <strong>
                                            {flight.from}
                                        </strong>

                                        <ArrowRight size={16} />

                                        <strong>
                                            {flight.to}
                                        </strong>

                                    </div>

                                </td>

                                <td>

                                    <div className="af-departure-box">

                                        <strong
                                            className={
                                                flight.status?.toLowerCase() ===
                                                "delayed"
                                                    ? "af-danger-text"
                                                    : ""
                                            }
                                        >

                                            {flight.departureTime}

                                        </strong>

                                        <span
                                            className={
                                                flight.status?.toLowerCase() ===
                                                "delayed"
                                                    ? "af-danger-text"
                                                    : ""
                                            }
                                        >

                                            {flight.duration}

                                        </span>

                                    </div>

                                </td>

                                <td>

                                    <span
                                        className={`af-status ${
                                            flight.status?.toLowerCase() ===
                                            "delayed"
                                                ? "af-delayed"
                                                : "af-success"
                                        }`}
                                    >

                                        <div className="af-dot"></div>

                                        {flight.status || "On Time"}

                                    </span>

                                </td>

                                <td className="af-right">

                                    <div className="af-action-box">

                                        <button>
                                            <Pencil size={18} />
                                        </button>

                                        <button className="af-danger-btn">
                                            <Ban size={18} />
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                        </tbody>

                    </table>

                    {/* PAGINATION */}

                    <div className="af-pagination">

                        <p>

                            Showing 1 to {flights.length}
                            {" "}of {flights.length} flights

                        </p>

                        <div className="af-pagination-buttons">

                            <button>
                                <ChevronLeft size={16} />
                            </button>

                            <button className="active">
                                1
                            </button>

                            <button>
                                <ChevronRight size={16} />
                            </button>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}

                <div className="af-bottom-grid">

                    <div className="af-gradient-card">

                        <div className="af-gradient-content">

                            <h3>
                                Route Optimization Engine
                            </h3>

                            <p>
                                The transatlantic corridor
                                is experiencing higher than
                                average winds.
                            </p>

                            <button>
                                View Weather Data
                            </button>

                        </div>

                        <Wind
                            className="af-wind-icon"
                            size={170}
                        />

                    </div>

                    <div className="af-health-card">

                        <div className="af-health-header">

                            <h3>
                                System Health
                            </h3>

                            <span>
                                Stable
                            </span>

                        </div>

                        <div className="af-progress-section">

                            <div className="af-progress-info">

                                <p>
                                    Booking Sync
                                </p>

                                <strong>
                                    100%
                                </strong>

                            </div>

                            <div className="af-progress-bar">

                                <div className="af-progress-fill af-full"></div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}