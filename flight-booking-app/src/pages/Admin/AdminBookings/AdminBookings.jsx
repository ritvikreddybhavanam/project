// src/pages/Admin/AdminBookings.jsx

import { useEffect, useState } from "react";

import "./AdminBookings.css";

import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar.jsx";

import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../../../firebase.js";

export default function AdminBookings() {

    const [bookings, setBookings] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchBookings = async () => {

            try {

                const bookingsRef = collection(
                    db,
                    "Bookings"
                );

                const snapshot = await getDocs(
                    bookingsRef
                );

                const bookingsData = snapshot.docs.map(
                    (doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    })
                );

                setBookings(bookingsData);

            } catch (error) {

                console.error(
                    "Error fetching bookings:",
                    error
                );

            } finally {

                setLoading(false);

            }
        };

        fetchBookings();

    }, []);

    const simulateCSVExport = () => {

        const toast = document.getElementById(
            "booking-toast"
        );

        toast.classList.remove(
            "booking-toast-hidden"
        );

        toast.classList.add(
            "booking-toast-show"
        );

        setTimeout(() => {

            toast.classList.remove(
                "booking-toast-show"
            );

            toast.classList.add(
                "booking-toast-hidden"
            );

        }, 3000);
    };

    return (

        <div className="booking-layout">

            <AdminSidebar />

            {/* MAIN WRAPPER */}

            <div className="booking-main-wrapper">

                {/* HEADER */}

                <header className="booking-header">

                    <div className="booking-search-box">

                        <span className="material-symbols-outlined">
                            search
                        </span>

                        <input
                            type="text"
                            placeholder="Search bookings..."
                        />

                    </div>

                    <div className="booking-header-right">

                        <button>

                            <span className="material-symbols-outlined">
                                notifications
                            </span>

                        </button>

                        <button>

                            <span className="material-symbols-outlined">
                                mail
                            </span>

                        </button>

                        <div className="booking-profile">

                            <img
                                src="https://i.pravatar.cc/100"
                                alt="admin"
                            />

                            <span>
                                SkyGuide Admin
                            </span>

                        </div>

                    </div>

                </header>

                {/* MAIN CONTENT */}

                <main className="booking-main-content">

                    {/* PAGE TOP */}

                    <div className="booking-page-top">

                        <div>

                            <h2>
                                Booking Management
                            </h2>

                            <p>
                                Review and manage all
                                bookings.
                            </p>

                        </div>

                        <div className="booking-page-actions">

                            <button
                                className="booking-outline-btn"
                                onClick={simulateCSVExport}
                            >

                                <span className="material-symbols-outlined">
                                    download
                                </span>

                                Export CSV

                            </button>

                            <button className="booking-primary-btn">

                                <span className="material-symbols-outlined">
                                    add
                                </span>

                                New Booking

                            </button>

                        </div>

                    </div>

                    {/* FILTERS */}

                    <section className="booking-filters">

                        <div className="booking-filter-group">

                            <label>
                                Date
                            </label>

                            <input type="date" />

                        </div>

                        <div className="booking-filter-group">

                            <label>
                                Status
                            </label>

                            <select>

                                <option>
                                    All
                                </option>

                                <option>
                                    Paid
                                </option>

                                <option>
                                    Pending
                                </option>

                                <option>
                                    Refunded
                                </option>

                            </select>

                        </div>

                        <div className="booking-filter-group">

                            <label>
                                Payment Method
                            </label>

                            <select>

                                <option>
                                    All
                                </option>

                                <option>
                                    Card
                                </option>

                                <option>
                                    UPI
                                </option>

                                <option>
                                    Wallet
                                </option>

                            </select>

                        </div>

                        <button className="booking-apply-btn">
                            Apply Filters
                        </button>

                    </section>

                    {/* TABLE */}

                    <div className="booking-table-wrapper">

                        <table className="booking-table">

                            <thead>

                            <tr>

                                <th>
                                    Booking ID
                                </th>

                                <th>
                                    Passenger
                                </th>

                                <th>
                                    Flight
                                </th>

                                <th>
                                    Date
                                </th>

                                <th>
                                    Amount
                                </th>

                                <th>
                                    Status
                                </th>

                                <th>
                                    Actions
                                </th>

                            </tr>

                            </thead>

                            <tbody>

                            {loading ? (

                                <tr>

                                    <td
                                        colSpan="7"
                                        style={{
                                            textAlign:
                                                "center",
                                            padding:
                                                "30px",
                                        }}
                                    >

                                        Loading...

                                    </td>

                                </tr>

                            ) : (

                                bookings.map(
                                    (
                                        booking,
                                        index
                                    ) => (

                                        <tr
                                            key={booking.id}
                                        >

                                            <td>

                                                #
                                                {booking.bookingId ||
                                                    `SG-${1000 + index}`}

                                            </td>

                                            <td>

                                                <div className="booking-passenger-info">

                                                    <div
                                                        className={`booking-avatar ${
                                                            index %
                                                            3 ===
                                                            1
                                                                ? "booking-orange"
                                                                : index %
                                                                3 ===
                                                                2
                                                                    ? "booking-gray"
                                                                    : ""
                                                        }`}
                                                    >

                                                        {booking.passengerName
                                                            ?.split(
                                                                " "
                                                            )
                                                            .map(
                                                                (
                                                                    word
                                                                ) =>
                                                                    word[0]
                                                            )
                                                            .join(
                                                                ""
                                                            )
                                                            .slice(
                                                                0,
                                                                2
                                                            )
                                                            .toUpperCase()}

                                                    </div>

                                                    <div>

                                                        <h4>

                                                            {booking.passengerName ||
                                                                "Passenger"}

                                                        </h4>

                                                        <p>

                                                            {booking.email ||
                                                                "No Email"}

                                                        </p>

                                                    </div>

                                                </div>

                                            </td>

                                            <td>

                                                <div className="booking-flight-info">

                                                    <h4>

                                                        {booking.from} →
                                                        {" "}
                                                        {booking.to}

                                                    </h4>

                                                    <p>

                                                        {booking.flightNumber ||
                                                            "FL-101"}
                                                        {" • "}
                                                        {booking.class ||
                                                            "Economy"}

                                                    </p>

                                                </div>

                                            </td>

                                            <td>

                                                {booking.date ||
                                                    "N/A"}

                                            </td>

                                            <td className="booking-price">

                                                $
                                                {booking.amount ||
                                                    booking.price ||
                                                    0}

                                            </td>

                                            <td>

                                                <span
                                                    className={`booking-status ${
                                                        booking.status ===
                                                        "Paid"
                                                            ? "booking-paid"
                                                            : booking.status ===
                                                            "Pending"
                                                                ? "booking-pending"
                                                                : "booking-refunded"
                                                    }`}
                                                >

                                                    {booking.status ||
                                                        "Paid"}

                                                </span>

                                            </td>

                                            <td>

                                                <button className="booking-table-action-btn">

                                                    <span className="material-symbols-outlined">
                                                        more_vert
                                                    </span>

                                                </button>

                                            </td>

                                        </tr>

                                    )
                                )

                            )}

                            </tbody>

                        </table>

                        {/* PAGINATION */}

                        <div className="booking-pagination">

                            <p>

                                Showing 1 to{" "}
                                {bookings.length}
                                {" "}of{" "}
                                {bookings.length}
                                {" "}bookings

                            </p>

                            <div className="booking-pagination-buttons">

                                <button>
                                    {"<"}
                                </button>

                                <button className="booking-active-page">
                                    1
                                </button>

                                <button>
                                    2
                                </button>

                                <button>
                                    3
                                </button>

                                <button>
                                    {">"}
                                </button>

                            </div>

                        </div>

                    </div>

                </main>

            </div>

            {/* TOAST */}

            <div
                id="booking-toast"
                className="booking-toast booking-toast-hidden"
            >

                <span className="material-symbols-outlined">
                    check_circle
                </span>

                <div>

                    <h4>
                        Export Started
                    </h4>

                    <p>
                        Your CSV is being generated.
                    </p>

                </div>

            </div>

        </div>
    );
}