// src/pages/Admin/AdminAnalytics.jsx

import { useEffect, useState } from "react";

import "./AdminAnalytics.css";

import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar.jsx";

import {
    Search,
    Bell,
    Mail,
    HelpCircle,
    CalendarDays,
    TrendingUp,
    TrendingDown,
    Minus,
    ChevronRight,
} from "lucide-react";

import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../../../firebase.js";

export default function AdminAnalytics() {

    const [analyticsData, setAnalyticsData] = useState({
        totalRevenue: 0,
        totalBookings: 0,
        conversionRate: "8.42%",
        averageTicketPrice: 0,
    });

    const [bookings, setBookings] = useState([]);

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {

        const fetchAnalyticsData = async () => {

            try {

                const bookingsSnapshot = await getDocs(
                    collection(db, "Bookings")
                );

                const flightsSnapshot = await getDocs(
                    collection(db, "Flights")
                );

                let totalRevenue = 0;

                const bookingData = [];

                bookingsSnapshot.forEach((doc) => {

                    const data = doc.data();

                    const amount =
                        Number(data.totalPrice) ||
                        Number(data.price) ||
                        Number(data.amount) ||
                        0;

                    totalRevenue += amount;

                    bookingData.push({
                        id: data.bookingId || `#${doc.id.slice(0, 8)}`,
                        from: data.from || "N/A",
                        to: data.to || "N/A",
                        type: data.classType || "Economy",
                        status: data.status || "Pending",
                        amount: `$${amount}`,
                    });
                });

                const averageTicketPrice =
                    bookingsSnapshot.size > 0
                        ? (
                            totalRevenue / bookingsSnapshot.size
                        ).toFixed(2)
                        : 0;

                const destinationMap = {};

                flightsSnapshot.forEach((doc) => {

                    const data = doc.data();

                    const city = data.to || "Unknown";

                    if (!destinationMap[city]) {

                        destinationMap[city] = {
                            city: city,
                            growth: `+${
                                Math.floor(Math.random() * 25) + 5
                            }% growth`,
                            image:
                                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
                            count: 1,
                        };

                    } else {

                        destinationMap[city].count += 1;

                    }
                });

                const destinationArray = Object.values(destinationMap)
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 3);

                setAnalyticsData({
                    totalRevenue,
                    totalBookings: bookingsSnapshot.size,
                    conversionRate: "8.42%",
                    averageTicketPrice,
                });

                setBookings(bookingData);

                setDestinations(destinationArray);

            } catch (error) {

                console.error(
                    "Error fetching analytics data:",
                    error
                );
            }
        };

        fetchAnalyticsData();

    }, []);

    return (

        <div className="analytics-layout">

            <AdminSidebar />

            {/* TOPBAR */}

            <header className="analytics-topbar">

                <div className="analytics-search">

                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search analytics..."
                    />

                </div>

                <div className="analytics-top-actions">

                    <button>
                        <Bell size={18} />
                    </button>

                    <button>
                        <Mail size={18} />
                    </button>

                    <button>
                        <HelpCircle size={18} />
                    </button>

                </div>

            </header>

            {/* MAIN */}

            <main className="analytics-main">

                {/* HEADER */}

                <div className="analytics-header">

                    <div>

                        <h1>Platform Analytics</h1>

                        <p>
                            Deep dive into real-time platform performance and booking trends.
                        </p>

                    </div>

                    <div className="analytics-filter">

                        <CalendarDays size={18} />

                        <input type="date" />

                        <span>to</span>

                        <input type="date" />

                        <button>
                            Filter
                        </button>

                    </div>

                </div>

                {/* METRICS */}

                <div className="metric-grid">

                    <div className="metric-card">

                        <span>Total Revenue</span>

                        <h2>
                            $
                            {analyticsData.totalRevenue.toLocaleString()}
                        </h2>

                        <div className="metric-trend positive">

                            <TrendingUp size={15} />

                            <p>+12.4% vs last month</p>

                        </div>

                    </div>

                    <div className="metric-card">

                        <span>Active Bookings</span>

                        <h2>
                            {analyticsData.totalBookings}
                        </h2>

                        <div className="metric-trend positive">

                            <TrendingUp size={15} />

                            <p>+5.2% vs last month</p>

                        </div>

                    </div>

                    <div className="metric-card">

                        <span>User Conversion</span>

                        <h2>
                            {analyticsData.conversionRate}
                        </h2>

                        <div className="metric-trend negative">

                            <TrendingDown size={15} />

                            <p>-1.1% vs last month</p>

                        </div>

                    </div>

                    <div className="metric-card">

                        <span>Avg. Ticket Price</span>

                        <h2>
                            $
                            {analyticsData.averageTicketPrice}
                        </h2>

                        <div className="metric-trend neutral">

                            <Minus size={15} />

                            <p>Stable performance</p>

                        </div>

                    </div>

                </div>

                {/* CHART SECTION */}

                <div className="chart-grid">

                    {/* BAR CHART */}

                    <div className="chart-card bookings-chart">

                        <div className="card-head">

                            <h3>Bookings by Month</h3>

                            <button>
                                Download CSV
                            </button>

                        </div>

                        <div className="bar-chart">

                            {[
                                { month: "May", height: "40%" },
                                { month: "Jun", height: "55%" },
                                { month: "Jul", height: "45%" },
                                { month: "Aug", height: "85%", active: true },
                                { month: "Sep", height: "65%" },
                                { month: "Oct", height: "75%" },
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="bar-item"
                                >

                                    <div
                                        className={`bar ${item.active ? "active" : ""}`}
                                        style={{
                                            height: item.height,
                                        }}
                                    />

                                    <span>{item.month}</span>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* DONUT */}

                    <div className="chart-card donut-card">

                        <h3>Traffic Sources</h3>

                        <div className="donut-wrapper">

                            <div className="donut-chart">

                                <div className="donut-center">

                                    <h2>100%</h2>

                                    <p>Growth</p>

                                </div>

                            </div>

                        </div>

                        <div className="traffic-list">

                            <div>
                                <span className="dot primary"></span>
                                Organic Search
                                <strong>60%</strong>
                            </div>

                            <div>
                                <span className="dot orange"></span>
                                Paid Search
                                <strong>25%</strong>
                            </div>

                            <div>
                                <span className="dot blue"></span>
                                Referral
                                <strong>15%</strong>
                            </div>

                        </div>

                    </div>

                </div>

                {/* TABLE + DESTINATIONS */}

                <div className="bottom-grid">

                    {/* TABLE */}

                    <div className="table-section">

                        <h3>
                            Recent Platform Activities
                        </h3>

                        <div className="analytics-table-wrapper">

                            <table className="analytics-table">

                                <thead>

                                <tr>
                                    <th>Transaction ID</th>
                                    <th>Route</th>
                                    <th>Class</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                </tr>

                                </thead>

                                <tbody>

                                {bookings.map((item, index) => (

                                    <tr key={index}>

                                        <td className="transaction-id">
                                            {item.id}
                                        </td>

                                        <td>

                                            <div className="route-box">

                                                <span>{item.from}</span>

                                                <ChevronRight size={16} />

                                                <span>{item.to}</span>

                                            </div>

                                        </td>

                                        <td>{item.type}</td>

                                        <td>

                        <span className={`status-pill ${item.status.toLowerCase()}`}>
                          {item.status}
                        </span>

                                        </td>

                                        <td className="amount">
                                            {item.amount}
                                        </td>

                                    </tr>

                                ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* DESTINATIONS */}

                    <div className="destination-section">

                        <h3>
                            Popular Destinations
                        </h3>

                        <div className="destination-list">

                            {destinations.map((item, index) => (

                                <div
                                    key={index}
                                    className="destination-card"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.city}
                                    />

                                    <div className="destination-overlay">

                                        <h4>{item.city}</h4>

                                        <p>{item.growth}</p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}