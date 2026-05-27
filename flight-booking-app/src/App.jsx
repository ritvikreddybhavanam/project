import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import Login from "./pages/Login/Login.jsx";
import Support from "./pages/Support/Support.jsx";
import Flights from "./pages/Flights/Flights.jsx";
import Booking from "./pages/Booking/Booking.jsx";
import SeatSelection from "./pages/SeatSelection/SeatSelection.jsx";
import Payment from "./pages/Payment/Payment.jsx";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess.jsx";
import PreviousBookings from "./pages/PreviousBookings/PreviousBookings.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard.jsx";
import AdminBookings from "./pages/Admin/AdminBookings/AdminBookings.jsx";
import AdminFlights from "./pages/Admin/AdminFlights/AdminFlights.jsx";
import AdminUsers from "./pages/Admin/AdminUsers/AdminUsers.jsx";
import AdminAnalytics from "./pages/Admin/AdminAnalytics/AdminAnalytics.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/support" element={<Support />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/seat-selection" element={<SeatSelection />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/success" element={<PaymentSuccess />} />
                <Route path="/previousbookings" element={<PreviousBookings />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/bookings" element={<AdminBookings />} />
                <Route path="/admin/flights" element={<AdminFlights />} />
                <Route path="admin/users" element={<AdminUsers />} />
                <Route path="admin/analytics" element={<AdminAnalytics />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;