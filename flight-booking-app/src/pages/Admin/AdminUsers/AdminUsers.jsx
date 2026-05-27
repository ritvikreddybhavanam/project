// src/pages/Admin/AdminUsers.jsx

import { useEffect, useState } from "react";

import "./AdminUsers.css";

import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar.jsx";

import {
    Search,
    Bell,
    HelpCircle,
    Mail,
    Filter,
    UserPlus,
    Lock,
    UserX,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    UserCheck,
    Edit,
} from "lucide-react";

import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../../../firebase.js";

export default function AdminUsers() {

    const [users, setUsers] = useState([]);

    const [stats, setStats] = useState({
        totalUsers: 0,
        activeUsers: 0,
        newUsers: 0,
    });

    useEffect(() => {

        const fetchUsers = async () => {

            try {

                const usersSnapshot = await getDocs(
                    collection(db, "Users")
                );

                const bookingsSnapshot = await getDocs(
                    collection(db, "Bookings")
                );

                const bookingsData = [];

                bookingsSnapshot.forEach((doc) => {
                    bookingsData.push(doc.data());
                });

                const usersData = [];

                let activeUsers = 0;

                usersSnapshot.forEach((doc) => {

                    const data = doc.data();

                    const userBookings = bookingsData.filter(
                        (booking) =>
                            booking.email === data.email
                    ).length;

                    const status =
                        data.status || "Active";

                    if (status === "Active") {
                        activeUsers++;
                    }

                    const initials =
                        data.name
                            ?.split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase() || "NA";

                    usersData.push({
                        id: doc.id,
                        name: data.name || "Unknown User",
                        email: data.email || "No Email",
                        initials,
                        status,
                        joined:
                            data.joined ||
                            "Jan 01, 2025",
                        bookings: userBookings,
                        image:
                            data.photoURL ||
                            "https://i.pravatar.cc/100",
                    });
                });

                setUsers(usersData);

                setStats({
                    totalUsers: usersData.length,
                    activeUsers,
                    newUsers: Math.floor(
                        usersData.length / 4
                    ),
                });

            } catch (error) {

                console.error(
                    "Error fetching users:",
                    error
                );
            }
        };

        fetchUsers();

    }, []);

    return (

        <div className="usersAdminPageLayout">

            <AdminSidebar />

            <div className="usersAdminMainWrapper">

                <header className="usersAdminTopbar">

                    <div className="usersAdminSearchBox">

                        <Search size={18} />

                        <input
                            type="text"
                            placeholder="Search by name or email..."
                        />

                    </div>

                    <div className="usersAdminTopActions">

                        <button>
                            <Bell size={18} />
                        </button>

                        <button>
                            <HelpCircle size={18} />
                        </button>

                        <button>
                            <Mail size={18} />
                        </button>

                    </div>

                </header>

                <main className="usersAdminMainContent">

                    <div className="usersAdminHeader">

                        <div>

                            <h1>User Directory</h1>

                            <p>
                                Manage your travelers and administrative roles.
                            </p>

                        </div>

                        <div className="usersAdminHeaderButtons">

                            <button className="usersAdminFilterBtn">

                                <Filter size={18} />

                                Filters

                            </button>

                            <button className="usersAdminNewUserBtn">

                                <UserPlus size={18} />

                                New User

                            </button>

                        </div>

                    </div>

                    <div className="usersAdminStatsGrid">

                        <div className="usersAdminStatCard">

                            <span>TOTAL USERS</span>

                            <h3>
                                {stats.totalUsers}
                            </h3>

                            <p>
                                Registered accounts
                            </p>

                        </div>

                        <div className="usersAdminStatCard">

                            <span>ACTIVE NOW</span>

                            <h3>
                                {stats.activeUsers}
                            </h3>

                            <p>
                                Currently active users
                            </p>

                        </div>

                        <div className="usersAdminStatCard">

                            <span>NEW TODAY</span>

                            <h3>
                                {stats.newUsers}
                            </h3>

                            <p>
                                New traveler signups
                            </p>

                        </div>

                        <div className="usersAdminStatCard">

                            <span>SYSTEM HEALTH</span>

                            <h3 className="usersAdminGreenText">
                                99.9%
                            </h3>

                            <p>
                                Last sync: 2m ago
                            </p>

                        </div>

                    </div>

                    <div className="usersAdminTableWrapper">

                        <table className="usersAdminTable">

                            <thead>

                            <tr>

                                <th>User Details</th>
                                <th>Status</th>
                                <th>Joined Date</th>
                                <th>Bookings</th>
                                <th className="usersAdminAlignRight">
                                    Actions
                                </th>

                            </tr>

                            </thead>

                            <tbody>

                            {users.map((user, index) => (

                                <tr key={index}>

                                    <td>

                                        <div className="usersAdminUserBox">

                                            <img
                                                src={user.image}
                                                alt={user.name}
                                                className="usersAdminUserAvatar"
                                            />

                                            <div>

                                                <h4>
                                                    {user.name}
                                                </h4>

                                                <p>
                                                    {user.email}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td>

                                        <span
                                            className={`usersAdminStatusBadge usersAdminStatus${user.status}`}
                                        >

                                            {user.status}

                                        </span>

                                    </td>

                                    <td>
                                        {user.joined}
                                    </td>

                                    <td className="usersAdminBookingsText">
                                        {user.bookings}
                                    </td>

                                    <td>

                                        <div className="usersAdminActionButtons">

                                            {user.status === "Suspended" ? (

                                                <button>
                                                    <UserCheck size={18} />
                                                </button>

                                            ) : (

                                                <>

                                                    <button>
                                                        <Lock size={18} />
                                                    </button>

                                                    <button className="usersAdminDangerButton">
                                                        <UserX size={18} />
                                                    </button>

                                                </>

                                            )}

                                            <button>
                                                <Edit size={18} />
                                            </button>

                                            <button>
                                                <MoreVertical size={18} />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                            </tbody>

                        </table>

                        <div className="usersAdminPagination">

                            <p>
                                Showing 1 to {users.length} of {users.length} users
                            </p>

                            <div className="usersAdminPaginationButtons">

                                <button>
                                    <ChevronLeft size={16} />
                                </button>

                                <button className="usersAdminPaginationActive">
                                    1
                                </button>

                                <button>2</button>

                                <button>3</button>

                                <button>
                                    <ChevronRight size={16} />
                                </button>

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}