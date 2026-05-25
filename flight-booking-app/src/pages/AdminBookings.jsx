import "../assets/styles/AdminBookings.css";

export default function AdminBookings() {
    const simulateCSVExport = () => {
        const toast = document.getElementById("export-toast");

        toast.classList.remove("admin-toast-hidden");
        toast.classList.add("admin-toast-show");

        setTimeout(() => {
            toast.classList.remove("admin-toast-show");
            toast.classList.add("admin-toast-hidden");
        }, 3000);
    };

    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="admin-sidebar-top">
                    <div className="admin-brand">
                        <h1>SkyGuide</h1>
                        <p>ADMIN CONSOLE</p>
                    </div>

                    <nav className="admin-nav">
                        <a href="/" className="admin-nav-link">
                            <span className="material-symbols-outlined">dashboard</span>
                            Overview
                        </a>

                        <a href="/" className="admin-nav-link">
                            <span className="material-symbols-outlined">flight</span>
                            Flights
                        </a>

                        <a href="/" className="admin-nav-link active">
                            <span className="material-symbols-outlined">confirmation_number</span>
                            Bookings
                        </a>

                        <a href="/" className="admin-nav-link">
                            <span className="material-symbols-outlined">group</span>
                            Users
                        </a>

                        <a href="/" className="admin-nav-link">
                            <span className="material-symbols-outlined">monitoring</span>
                            Analytics
                        </a>

                        <a href="/" className="admin-nav-link settings-link">
                            <span className="material-symbols-outlined">settings</span>
                            Settings
                        </a>
                    </nav>
                </div>
            </aside>

            {/* Main Section */}
            <div className="admin-main-wrapper">
                {/* Header */}
                <header className="admin-header">
                    <div className="admin-search-box">
                        <span className="material-symbols-outlined">search</span>
                        <input type="text" placeholder="Search bookings..." />
                    </div>

                    <div className="admin-header-right">
                        <button>
                            <span className="material-symbols-outlined">notifications</span>
                        </button>

                        <button>
                            <span className="material-symbols-outlined">mail</span>
                        </button>

                        <div className="admin-profile">
                            <img
                                src="https://i.pravatar.cc/100"
                                alt="admin"
                            />
                            <span>SkyGuide Admin</span>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="admin-main-content">
                    {/* Top Section */}
                    <div className="admin-page-top">
                        <div>
                            <h2>Booking Management</h2>
                            <p>Review and manage all bookings.</p>
                        </div>

                        <div className="admin-page-actions">
                            <button
                                className="outline-btn"
                                onClick={simulateCSVExport}
                            >
                                <span className="material-symbols-outlined">download</span>
                                Export CSV
                            </button>

                            <button className="primary-btn">
                                <span className="material-symbols-outlined">add</span>
                                New Booking
                            </button>
                        </div>
                    </div>

                    {/* Filters */}
                    <section className="admin-filters">
                        <div className="filter-group">
                            <label>Date</label>
                            <input type="date" />
                        </div>

                        <div className="filter-group">
                            <label>Status</label>
                            <select>
                                <option>All</option>
                                <option>Paid</option>
                                <option>Pending</option>
                                <option>Refunded</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Payment Method</label>
                            <select>
                                <option>All</option>
                                <option>Card</option>
                                <option>UPI</option>
                                <option>Wallet</option>
                            </select>
                        </div>

                        <button className="apply-btn">Apply Filters</button>
                    </section>

                    {/* Table */}
                    <div className="admin-table-wrapper">
                        <table className="admin-table">
                            <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Passenger</th>
                                <th>Flight</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>#SG-88291</td>

                                <td>
                                    <div className="passenger-info">
                                        <div className="avatar">JM</div>

                                        <div>
                                            <h4>James Miller</h4>
                                            <p>james@email.com</p>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="flight-info">
                                        <h4>LHR → JFK</h4>
                                        <p>UA-102 • Economy</p>
                                    </div>
                                </td>

                                <td>Oct 24, 2023</td>

                                <td className="price">$1,240</td>

                                <td>
                                    <span className="status paid">Paid</span>
                                </td>

                                <td>
                                    <button className="table-action-btn">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>#SG-88295</td>

                                <td>
                                    <div className="passenger-info">
                                        <div className="avatar orange">SD</div>

                                        <div>
                                            <h4>Sarah Dupont</h4>
                                            <p>sarah@email.com</p>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="flight-info">
                                        <h4>CDG → DXB</h4>
                                        <p>AF-291 • Business</p>
                                    </div>
                                </td>

                                <td>Oct 25, 2023</td>

                                <td className="price">$4,850</td>

                                <td>
                                    <span className="status pending">Pending</span>
                                </td>

                                <td>
                                    <button className="table-action-btn">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>#SG-88301</td>

                                <td>
                                    <div className="passenger-info">
                                        <div className="avatar gray">BK</div>

                                        <div>
                                            <h4>Ben Kowalski</h4>
                                            <p>ben@email.com</p>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className="flight-info">
                                        <h4>SIN → SYD</h4>
                                        <p>SQ-231 • Economy</p>
                                    </div>
                                </td>

                                <td>Oct 26, 2023</td>

                                <td className="price">$980</td>

                                <td>
                                    <span className="status refunded">Refunded</span>
                                </td>

                                <td>
                                    <button className="table-action-btn">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="pagination">
                            <p>Showing 1 to 3 of 1248 bookings</p>

                            <div className="pagination-buttons">
                                <button>{"<"}</button>
                                <button className="active-page">1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>{">"}</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Toast */}
            <div
                id="export-toast"
                className="admin-toast admin-toast-hidden"
            >
        <span className="material-symbols-outlined">
          check_circle
        </span>

                <div>
                    <h4>Export Started</h4>
                    <p>Your CSV is being generated.</p>
                </div>
            </div>
        </div>
    );
}