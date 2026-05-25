import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/styles/Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const loginUser = async () => {

        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login Successful!");
            localStorage.setItem("isLoggedIn", "true");
            navigate("/");

        } catch (error) {

            if (error.code === "auth/invalid-credential") {
                alert("Invalid email or password");
            }

            else if (error.code === "auth/user-not-found") {
                alert("User not found");
            }

            else if (error.code === "auth/wrong-password") {
                alert("Incorrect password");
            }

            else {
                alert("Something went wrong");
            }
        }
    };

    return (
        <div className="page">
            <Navbar />
            <div className="login">
                <h1>Welcome Back</h1>
                <p>
                    Log in to manage your flight bookings
                </p>

                {/* EMAIL */}

                <label>EMAIL ADDRESS</label>

                <br />
                <br />

                <div className="input-box">

                    <span>✉️</span>

                    <input
                        type="email"
                        placeholder="e.g name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </div>

                <br />
                <br />

                {/* PASSWORD */}

                <div className="password-header">

                    <label>PASSWORD</label>

                    <span
                        className="forgot-link"
                        onClick={() => alert("Forgot Password Feature")}
                    >
                        FORGOT PASSWORD?
                    </span>

                </div>

                <br />

                <div className="input-box">

                    <span>🔒</span>

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        👁️
                    </span>

                </div>

                <br />

                {/* LOGIN BUTTON */}

                <button onClick={loginUser}>
                    Log In
                </button>

                {/* REGISTER LINK */}

                <p className="signup-text">

                    Don't have an account?

                    <span
                        className="signup-link"
                        onClick={() => navigate("/register")}
                    >
                        {" "}Create One
                    </span>

                </p>

            </div>

            <Footer />

        </div>
    );
}