import {
    LayoutDashboard,
    Plane,
    Ticket,
    Users,
    BarChart3,
    Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./AdminSidebar.css";

export default function AdminSidebar() {
    const navigate = useNavigate();

    return (
        <aside className="skyadmin-sidebar">
            <div className="skyadmin-brand">
                <h1 className="skyadmin-brand-title">SkyGuide</h1>
                <p className="skyadmin-brand-subtitle">Admin Console</p>
            </div>

            <nav className="skyadmin-navigation">
                <button className="skyadmin-nav-button skyadmin-active-nav" onClick={() => navigate("/admin")}>
                    <LayoutDashboard size={18} />
                    <span>Overview</span>
                </button>

                <button className="skyadmin-nav-button" onClick={() => navigate("/admin/flights")}>
                    <Plane size={18} />
                    <span>Flights</span>
                </button>

                <button className="skyadmin-nav-button" onClick={() => navigate("/admin/bookings")}>
                    <Ticket size={18} />
                    <span>Bookings</span>
                </button>

                <button className="skyadmin-nav-button" onClick={() => navigate("/admin/users")}>
                    <Users size={18} />
                    <span>Users</span>
                </button>

                <button className="skyadmin-nav-button" onClick={() => navigate("/admin/analytics")}>
                    <BarChart3 size={18} />
                    <span>Analytics</span>
                </button>

            </nav>
        </aside>
    );
}