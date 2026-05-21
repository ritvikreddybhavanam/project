import "../assets/styles/HomePage.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingCard from "../components/BookingCard";
import HistoryTable from "../components/HistoryTable";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="home">
                <div className="banner">
                    <h1>My Bookings</h1>
                    <p>
                        Manage your upcoming journeys,
                        review past travel history, and
                        <br />
                        download your e-tickets in one secure place
                    </p>
                </div>
                <div className="home-content">
                    <div className="quick-filters">
                        <h2>Quick Filters</h2>
                        <label className="filter-option">
                            <input type="checkbox" defaultChecked />
                            <span>Upcoming Trips</span>
                        </label>
                        <label className="filter-option">
                            <input type="checkbox" />
                            <span>Completed</span>
                        </label>
                        <label className="filter-option">
                            <input type="checkbox" />
                            <span>Cancelled</span>
                        </label>
                        <hr />
                        <div className="support-section">
                            <h2>Support</h2>
                            <p>
                                Need help with a specific booking?
                                <br />
                                Our 24/7 support team is here to assist.
                            </p>
                            <button>Contact Support</button>
                        </div>
                    </div>
                    <div className="upcoming-flight">
                        <div className="heading">
                            <h2>Upcoming Flights</h2>
                            <p>2 pending journeys</p>
                        </div>
                        <BookingCard />
                        <BookingCard />
                        <div className="history-section">
                            <div className="heading">
                                <h2>History</h2>
                            </div>
                            <HistoryTable />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}