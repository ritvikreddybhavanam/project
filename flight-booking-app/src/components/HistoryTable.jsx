import "../assets/styles/HistoryTable.css";

const bookingHistory = [
    {
        id: 1,
        destination: "Tokyo (NRT)",
        tripType: "One-way Flight",
        date: "Oct 12, 2024",
        status: "COMPLETED",
        total: "$1,240.00",
        action: "Rebook"
    },

    {
        id: 2,
        destination: "Paris (CDG)",
        tripType: "Round Trip",
        date: "Aug 05, 2024",
        status: "CANCELLED",
        total: "$890.00",
        action: "Invoice"
    },

    {
        id: 3,
        destination: "Sydney (SYD)",
        tripType: "Business Class",
        date: "Jun 20, 2024",
        status: "COMPLETED",
        total: "$4,560.00",
        action: "Details"
    }
];

export default function HistoryTable() {
    return (
        <div className="history-table">

            {/* TABLE HEADER */}
            <div className="table-header">

                <p>Destination</p>
                <p>Date</p>
                <p>Status</p>
                <p>Total</p>
                <p>Action</p>

            </div>

            {/* TABLE ROWS */}
            {
                bookingHistory.map((booking) => (
                    <div className="table-row" key={booking.id}>

                        {/* DESTINATION */}
                        <div className="destination">

                            <span className="material-symbols-outlined">
                                location_on
                            </span>

                            <div>
                                <h3>{booking.destination}</h3>
                                <p>{booking.tripType}</p>
                            </div>

                        </div>

                        {/* DATE */}
                        <p>{booking.date}</p>

                        {/* STATUS */}
                        <span
                            className={
                                booking.status === "COMPLETED"
                                    ? "status completed"
                                    : "status cancelled"
                            }
                        >
                            {booking.status}
                        </span>

                        {/* TOTAL */}
                        <h3>{booking.total}</h3>

                        {/* ACTION */}
                        <button className="action-btn">
                            {booking.action}
                        </button>

                    </div>
                ))
            }

        </div>
    );
}