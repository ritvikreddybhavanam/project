import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import PreviousBookCard from "../../components/PreviousBookCard/PreviousBookCard.jsx";
import "./PreviousBooking.css"

import { auth, db } from "../../firebase.js";

import {
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore";

export default function MyBookings() {

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchBookings = async () => {

            try {

                const user = auth.currentUser;

                if (!user) {
                    setLoading(false);
                    return;
                }

                const q = query(
                    collection(db, "bookings"),
                    where("userId", "==", user.uid)
                );

                const querySnapshot = await getDocs(q);

                const bookingList = [];

                querySnapshot.forEach((doc) => {

                    bookingList.push({
                        id: doc.id,
                        ...doc.data(),
                    });

                });

                setBookings(bookingList);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);
            }
        };

        fetchBookings();

    }, []);

    return (

        <div className="my-bookings-layout">

            <Navbar />

            <main className="my-bookings-page">

                <h1>My Bookings</h1>

                {loading ? (

                    <p>Loading...</p>

                ) : bookings.length === 0 ? (

                    <div className="no-bookings">
                        No bookings found
                    </div>

                ) : (

                    bookings.map((booking) => (

                        <PreviousBookCard
                            key={booking.id}
                            booking={booking}
                        />

                    ))
                )}

            </main>

            <Footer />

        </div>
    );
}