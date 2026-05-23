import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import "../assets/styles/Login.css";
import Footer from "../components/Footer.jsx";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="page">
            <Navbar />
            <div className="login">
                <h1>Welcome Back</h1>
                <p>Log in to manage your flight bookings</p>

                <label htmlFor="">EMAIL ADDRESS</label><br/>
                <input type="text" placeholder="e.g name@company.com" />
                <br/><br/>

                <div>
                    <label htmlFor="">PASSWORD</label>
                    <a href="#">FORGOT PASSWORD?</a>
                </div><br/>
                <input type="password" placeholder="********"/>

                <br/>

                <input type="submit"/>

               <p className="signup-text">
                   Don't have an account?
                   <a href="#" onClick={() => navigate("/register")}>Create One</a>
               </p>
            </div>
            <Footer />
        </div>
    );
}