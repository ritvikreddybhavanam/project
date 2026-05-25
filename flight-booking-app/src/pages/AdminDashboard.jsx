// src/pages/AdminControlPanel.jsx

import "../assets/styles/AdminDashboard.css";

import {
    LayoutDashboard,
    Plane,
    Ticket,
    Users,
    BarChart3,
    Settings,
    Bell,
    Mail,
    Search,
} from "lucide-react";
import {useNavigate} from "react-router-dom";

export default function AdminDashboard({

                                              dashboardStats = {},

                                              latestFlights = [],

                                              busiestRoutes = [],

                                              airlineStats = [],

                                          }) {

    const navigate = useNavigate();

    return (

        <div className="skyadmin-wrapper">

            {/* SIDEBAR */}

            <aside className="skyadmin-sidebar">

                <div className="skyadmin-brand">

                    <h1 className="skyadmin-brand-title">
                        SkyGuide
                    </h1>

                    <p className="skyadmin-brand-subtitle">
                        Admin Console
                    </p>

                </div>

                <nav className="skyadmin-navigation">

                    <button className="skyadmin-nav-button skyadmin-active-nav">

                        <LayoutDashboard size={18} />

                        <span>Overview</span>

                    </button>

                    <button className="skyadmin-nav-button">

                        <Plane size={18} />

                        <span>Flights</span>

                    </button>

                    <button className="skyadmin-nav-button" onClick={() => navigate("/admin/bookings")}>

                        <Ticket size={18} />

                        <span>Bookings</span>

                    </button>

                    <button className="skyadmin-nav-button">

                        <Users size={18} />

                        <span>Users</span>

                    </button>

                    <button className="skyadmin-nav-button">

                        <BarChart3 size={18} />

                        <span>Analytics</span>

                    </button>

                    <button className="skyadmin-nav-button">

                        <Settings size={18} />

                        <span>Settings</span>

                    </button>

                </nav>

            </aside>

            {/* RIGHT SECTION */}

            <div className="skyadmin-main-section">

                {/* TOPBAR */}

                <header className="skyadmin-header">

                    <div className="ssky-adminsearch-container">

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

                {/* DASHBOARD CONTENT */}

                <main className="skyadmin-dashboard-content">

                    {/* STATISTICS */}

                    <section className="skyadmin-stats-layout">

                        <div className="skyadmin-stat-box">

                            <div className="skyadmin-stat-icon">
                                <Plane size={22} />
                            </div>

                            <p className="skyadmin-stat-label">
                                Total Flights
                            </p>

                            <h2 className="skyadmin-stat-number">
                                {dashboardStats.totalFlights || 0}
                            </h2>

                        </div>

                        <div className="skyadmin-stat-box">

                            <div className="skyadmin-stat-icon">
                                <Ticket size={22} />
                            </div>

                            <p className="skyadmin-stat-label">
                                Total Bookings
                            </p>

                            <h2 className="skyadmin-stat-number">
                                {dashboardStats.totalBookings || 0}
                            </h2>

                        </div>

                        <div className="skyadmin-stat-box">

                            <div className="skyadmin-stat-icon">
                                <Users size={22} />
                            </div>

                            <p className="skyadmin-stat-label">
                                Registered Users
                            </p>

                            <h2 className="skyadmin-stat-number">
                                {dashboardStats.totalUsers || 0}
                            </h2>

                        </div>

                        <div className="skyadmin-stat-box">

                            <div className="skyadmin-stat-icon">
                                <BarChart3 size={22} />
                            </div>

                            <p className="skyadmin-stat-label">
                                Revenue Earned
                            </p>

                            <h2 className="skyadmin-stat-number">
                                ${dashboardStats.totalRevenue || 0}
                            </h2>

                        </div>

                    </section>

                    {/* ANALYTICS SECTION */}

                    <section className="skyadmin-analytics-layout">

                        {/* ROUTES */}

                        <div className="skyadmin-card-panel">

                            <div className="skyadmin-panel-header">

                                <h2>Top Routes</h2>

                            </div>

                            <div className="skyadmin-routes-container">

                                {busiestRoutes.length === 0 ? (

                                    <p className="skyadmin-empty-text">
                                        No routes found
                                    </p>

                                ) : (

                                    busiestRoutes.map((route, index) => (

                                        <div
                                            className="skyadmin-route-card"
                                            key={index}
                                        >

                                            <div>

                                                <h4>
                                                    {route.from}
                                                    {" → "}
                                                    {route.to}
                                                </h4>

                                                <p>
                                                    {route.bookings}
                                                    {" "}
                                                    bookings
                                                </p>

                                            </div>

                                            <span>
                                                {route.percentage}%
                                            </span>

                                        </div>
                                    ))
                                )}

                            </div>

                        </div>

                        {/* AIRLINES */}

                        <div className="skyadmin-card-panel">

                            <div className="skyadmin-panel-header">

                                <h2>Airline Statistics</h2>

                            </div>

                            <div className="skyadmin-airline-container">

                                {airlineStats.length === 0 ? (

                                    <p className="skyadmin-empty-text">
                                        No airline data found
                                    </p>

                                ) : (

                                    airlineStats.map((airline, index) => (

                                        <div
                                            className="skyadmin-airline-card"
                                            key={index}
                                        >

                                            <div>

                                                <h4>
                                                    {airline.name}
                                                </h4>

                                                <p>
                                                    {airline.share}%
                                                    {" "}
                                                    market share
                                                </p>

                                            </div>

                                            <h3>
                                                ${airline.revenue}
                                            </h3>

                                        </div>
                                    ))
                                )}

                            </div>

                        </div>

                    </section>

                    {/* FLIGHT TABLE */}

                    <section className="skyadmin-table-panel">

                        <div className="skyadmin-panel-header">

                            <h2>Recent Flight Logs</h2>

                        </div>

                        <div className="skyadmin-table-wrapper">

                            <table className="skyadmin-data-table">

                                <thead>

                                <tr>

                                    <th>Flight ID</th>

                                    <th>Airline</th>

                                    <th>Route</th>

                                    <th>Status</th>

                                    <th>Load</th>

                                    <th>Revenue</th>

                                </tr>

                                </thead>

                                <tbody>

                                {latestFlights.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            className="skyadmin-no-data"
                                        >
                                            No flight records available
                                        </td>

                                    </tr>

                                ) : (

                                    latestFlights.map((flight) => (

                                        <tr key={flight.id}>

                                            <td>
                                                {flight.flightId}
                                            </td>

                                            <td>
                                                {flight.airline}
                                            </td>

                                            <td>
                                                {flight.from}
                                                {" → "}
                                                {flight.to}
                                            </td>

                                            <td>

                                                <span className={`skyadmin-flight-status ${flight.status.toLowerCase()}`}>
                                                    {flight.status}
                                                </span>

                                            </td>

                                            <td>
                                                {flight.load}%
                                            </td>

                                            <td>
                                                ${flight.revenue}
                                            </td>

                                        </tr>
                                    ))
                                )}

                                </tbody>

                            </table>

                        </div>

                    </section>

                </main>

            </div>

        </div>
    );
}