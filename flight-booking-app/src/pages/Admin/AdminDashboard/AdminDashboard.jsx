// src/pages/Admin/AdminDashboard.jsx

import { useEffect, useState } from "react";

import "./AdminDashboard.css";

import {
    Bell,
    Mail,
    Search,
    Plane,
    Ticket,
    Users,
    BarChart3,
} from "lucide-react";

import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar.jsx";

import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../../../firebase.js";

export default function AdminDashboard() {

    const [dashboardStats, setDashboardStats] = useState({
        totalFlights: 0,
        totalBookings: 0,
        totalUsers: 0,
        totalRevenue: 0,
    });

    const [recentFlights, setRecentFlights] = useState([]);

    const [recentBookings, setRecentBookings] = useState([]);

    const [recentUsers, setRecentUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchDashboardData = async () => {

            try {

                // COLLECTION REFERENCES

                const flightsRef = collection(db, "Flights");

                const bookingsRef = collection(db, "Bookings");

                const usersRef = collection(db, "Users");

                // FETCH DATA

                const [
                    flightsSnapshot,
                    bookingsSnapshot,
                    usersSnapshot,
                ] = await Promise.all([
                    getDocs(flightsRef),
                    getDocs(bookingsRef),
                    getDocs(usersRef),
                ]);

                // FLIGHTS DATA

                const flightsData = flightsSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // BOOKINGS DATA

                const bookingsData = bookingsSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // USERS DATA

                const usersData = usersSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // TOTAL COUNTS

                const totalFlights = flightsData.length;

                const totalBookings = bookingsData.length;

                const totalUsers = usersData.length;

                // TOTAL REVENUE

                let totalRevenue = 0;

                bookingsData.forEach((booking) => {

                    totalRevenue += Number(
                        booking.amount ||
                        booking.price ||
                        booking.totalPrice ||
                        0
                    );

                });

                // SET STATS

                setDashboardStats({
                    totalFlights,
                    totalBookings,
                    totalUsers,
                    totalRevenue,
                });

                // RECENT DATA

                setRecentFlights(flightsData.slice(0, 5));

                setRecentBookings(bookingsData.slice(0, 5));

                setRecentUsers(usersData.slice(0, 5));

            } catch (error) {

                console.error(
                    "Error fetching dashboard data:",
                    error
                );

            } finally {

                setLoading(false);

            }
        };

        fetchDashboardData();

    }, []);

    return (

        <div className="skyadmin-wrapper">

            <AdminSidebar />

            <div className="skyadmin-main-section">

                {/* HEADER */}

                <header className="skyadmin-header">

                    <div className="skyadmin-search-container">

                        <Search size={18} />

                        <input
                            type="text"
                            placeholder="Search flights, users or bookings"
                            className="skyadmin-search-input"
                        />

                    </div>

                    <div className="skyadmin-header-actions">

                        <button className="skyadmin-icon-button">
                            <Bell size={18} />
                        </button>

                        <button className="skyadmin-icon-button">
                            <Mail size={18} />
                        </button>

                    </div>

                </header>

                {/* DASHBOARD */}

                <main className="skyadmin-dashboard-content">

                    <div className="skyadmin-dashboard-heading">

                        <h1>
                            SkyGuide Dashboard
                        </h1>

                        <p>
                            Monitor flights, bookings,
                            users and revenue.
                        </p>

                    </div>

                    {/* STATS */}

                    <section className="skyadmin-stats-layout">

                        <div className="skyadmin-stat-box">

                            <div className="skyadmin-stat-icon">
                                <Plane size={24} />
                            </div>

                            <div>

                                <p>Total Flights</p>

                                <h2>
                                    {loading
                                        ? "..."
                                        : dashboardStats.totalFlights}
                                </h2>

                            </div>

                        </div>

                        <div className="skyadmin-stat-box">

                            <div className="skyadmin-stat-icon">
                                <Ticket size={24} />
                            </div>

                            <div>

                                <p>Total Bookings</p>

                                <h2>
                                    {loading
                                        ? "..."
                                        : dashboardStats.totalBookings}
                                </h2>

                            </div>

                        </div>

                        <div className="skyadmin-stat-box">

                            <div className="skyadmin-stat-icon">
                                <Users size={24} />
                            </div>

                            <div>

                                <p>Registered Users</p>

                                <h2>
                                    {loading
                                        ? "..."
                                        : dashboardStats.totalUsers}
                                </h2>

                            </div>

                        </div>

                        <div className="skyadmin-stat-box">

                            <div className="skyadmin-stat-icon">
                                <BarChart3 size={24} />
                            </div>

                            <div>

                                <p>Revenue Earned</p>

                                <h2>
                                    $
                                    {loading
                                        ? "..."
                                        : dashboardStats.totalRevenue.toLocaleString()}
                                </h2>

                            </div>

                        </div>

                    </section>

                    {/* RECENT FLIGHTS */}

                    <section className="skyadmin-data-section">

                        <div className="skyadmin-section-header">
                            <h3>Recent Flights</h3>
                        </div>

                        <div className="skyadmin-table-wrapper">

                            <table className="skyadmin-table">

                                <thead>

                                <tr>
                                    <th>Flight</th>
                                    <th>Route</th>
                                    <th>Departure</th>
                                    <th>Price</th>
                                </tr>

                                </thead>

                                <tbody>

                                {recentFlights.map((flight) => (

                                    <tr key={flight.id}>

                                        <td>
                                            {flight.flightCode || "N/A"}
                                        </td>

                                        <td>
                                            {flight.from} → {flight.to}
                                        </td>

                                        <td>
                                            {flight.departureTime}
                                        </td>

                                        <td>
                                            ${flight.price}
                                        </td>

                                    </tr>

                                ))}

                                </tbody>

                            </table>

                        </div>

                    </section>

                    {/* RECENT BOOKINGS */}

                    <section className="skyadmin-data-section">

                        <div className="skyadmin-section-header">
                            <h3>Recent Bookings</h3>
                        </div>

                        <div className="skyadmin-table-wrapper">

                            <table className="skyadmin-table">

                                <thead>

                                <tr>
                                    <th>Booking ID</th>
                                    <th>User</th>
                                    <th>Flight</th>
                                    <th>Amount</th>
                                </tr>

                                </thead>

                                <tbody>

                                {recentBookings.map((booking) => (

                                    <tr key={booking.id}>

                                        <td>
                                            {booking.bookingId}
                                        </td>

                                        <td>
                                            {booking.userName}
                                        </td>

                                        <td>
                                            {booking.flightCode}
                                        </td>

                                        <td>
                                            ${booking.amount}
                                        </td>

                                    </tr>

                                ))}

                                </tbody>

                            </table>

                        </div>

                    </section>

                    {/* RECENT USERS */}

                    <section className="skyadmin-data-section">

                        <div className="skyadmin-section-header">
                            <h3>Recent Users</h3>
                        </div>

                        <div className="skyadmin-table-wrapper">

                            <table className="skyadmin-table">

                                <thead>

                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Bookings</th>
                                </tr>

                                </thead>

                                <tbody>

                                {recentUsers.map((user) => (

                                    <tr key={user.id}>

                                        <td>
                                            {user.name}
                                        </td>

                                        <td>
                                            {user.email}
                                        </td>

                                        <td>
                                            {user.status}
                                        </td>

                                        <td>
                                            {user.bookings}
                                        </td>

                                    </tr>

                                ))}

                                </tbody>

                            </table>

                        </div>

                    </section>

                </main>

            </div>

        </div>
    );
}