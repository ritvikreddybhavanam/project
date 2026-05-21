import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/styles/RegisterPage.css";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className="main-content">

                {/* LEFT SECTION */}
                <div className="left">

                    <h1>
                        Your Journey begins with a single click
                    </h1>

                    <p>
                        Join SkyGuide and access exclusive corporate-tier <br/>
                        flight deals, intuitive seat selection, and a seamless <br/>
                        travel experience designed for the modern navigator.
                    </p>

                    <div className="tiles">

                        <div>
                            <span className="material-symbols-outlined">
                                speed
                            </span>

                            <p>FAST BOOKING</p>
                        </div>

                        <div>
                            <span className="material-symbols-outlined">
                                verified
                            </span>

                            <p>TRUSTED TRAVEL</p>
                        </div>

                        <div>
                            <span className="material-symbols-outlined">
                                support_agent
                            </span>

                            <p>24/7 SUPPORT</p>
                        </div>

                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="right">

                    <h2>Create an Account</h2>

                    <p>
                        Already have an account?
                        <a href="#" onClick={() => navigate("/login")}> Log In</a>
                    </p>

                    <br />

                    {/* FULL NAME */}
                    <label>FULL NAME</label>

                    <br />
                    <br />

                    <span>👤 </span>

                    <input
                        type="text"
                        placeholder="John Doe"
                    />

                    <br />
                    <br />
                    <br />

                    {/* EMAIL */}
                    <label>EMAIL ADDRESS</label>

                    <br />
                    <br />

                    <span>✉️ </span>

                    <input
                        type="email"
                        placeholder="john@example.com"
                    />

                    <br />
                    <br />
                    <br />

                    {/* PASSWORD */}
                    <label>PASSWORD</label>

                    <br />
                    <br />

                    <span>🔒 </span>

                    <input
                        type="password"
                        placeholder="***********"
                    />

                    <span> 👁️</span>

                    <p>
                        Must be at least 8 characters long
                        with a mix of numbers and symbols
                    </p>

                    <br />

                    {/* CHECKBOX */}
                    <input type="checkbox" />

                    <span>
                        {" "}I agree to SkyGuide's{" "}

                        <a href="#">
                            Terms of Service
                        </a>

                        {" "}and{" "}

                        <a href="#">
                            Privacy Policy
                        </a>.
                    </span>

                    <br />
                    <br />
                    <br />

                    {/* BUTTON */}
                    <button>
                        Create Account →
                    </button>

                </div>
            </div>

            <Footer />
        </>
    );
}