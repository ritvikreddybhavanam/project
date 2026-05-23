import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../assets/styles/RegisterPage.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

export default function RegisterPage() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const registerUser = async () => {

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account Created Successfully!");

      navigate("/login");

    } catch (error) {

      if (error.code === "auth/email-already-in-use") {
        alert("Email already exists");
      }

      else if (error.code === "auth/invalid-email") {
        alert("Invalid email address");
      }

      else if (error.code === "auth/weak-password") {
        alert("Weak password");
      }

      else {
        alert("Something went wrong");
      }
    }
  };

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
            Join SkyGuide and access exclusive corporate-tier
            flight deals, intuitive seat selection, and a seamless
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

            <span
              className="login-link"
              onClick={() => navigate("/login")}
            >
              {" "}Log In
            </span>

          </p>

          <br />

          {/* FULL NAME */}

          <label>FULL NAME</label>

          <br />
          <br />

          <div className="input-box">

            <span>👤</span>

            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>

          <br />
          <br />

          {/* EMAIL */}

          <label>EMAIL ADDRESS</label>

          <br />
          <br />

          <div className="input-box">

            <span>✉️</span>

            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <br />
          <br />

          {/* PASSWORD */}

          <label>PASSWORD</label>

          <br />
          <br />

          <div className="input-box">

            <span>🔒</span>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="***********"
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

          <p className="password-info">
            Must be at least 8 characters long
            with a mix of numbers and symbols
          </p>

          <br />

          {/* CHECKBOX */}

          <div className="terms">

            <input type="checkbox" />

            <span>
              I agree to SkyGuide's

              <a href="#">
                {" "}Terms of Service
              </a>

              {" "}and{" "}

              <a href="#">
                Privacy Policy
              </a>

            </span>

          </div>

          <br />
          <br />

          {/* BUTTON */}

          <button onClick={registerUser}>
            Create Account →
          </button>

        </div>

      </div>

      <Footer />
    </>
  );
}