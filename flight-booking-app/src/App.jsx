import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage.jsx";
import Login from "./pages/Login.jsx";
import Support from "./pages/Support.jsx";
import Flights from "./pages/Flights.jsx";
import Booking from "./pages/Booking.jsx";
import SeatSelection from "./pages/SeatSelection.jsx";
import Payment from "./pages/Payment.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import PreviousBookings from "./pages/PreviousBookings.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminBookings from "./pages/AdminBookings.jsx";

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
            </Routes>
        </BrowserRouter>
    );
}

export default App;