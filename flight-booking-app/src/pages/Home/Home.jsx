import "./HomePage.css";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="overlay"></div>

        <div className="search-flights">
          <h2>Your Journey, Redefined.</h2>

          <p>
            Experience the pinnacle of air travel with SkyGuide's
            <br />
            premium fleet and personalized service.
          </p>

          <div className="search">
            <div className="field">
              <label>FROM</label>
              <input type="text" placeholder="JFK" />
            </div>

            <div className="field">
              <label>TO</label>
              <input type="text" placeholder="LHR" />
            </div>

            <div className="field">
              <label>DEPARTURE</label>
              <input type="date" />
            </div>

            <div className="field">
              <label>PASSENGERS</label>

              <select>
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
              </select>
            </div>

            <button>Search Flights →</button>
          </div>
        </div>
      </div>
      <div className="features-section">
        <h2>Why Choose SkyGuide?</h2>

        <div className="features-container">
          <div className="feature-card">
            <span className="material-symbols-outlined feature-icon">
              support_agent
            </span>

            <h3 className="feature-heading">24/7 Global Support</h3>

            <p className="feature-description">
              Our dedicated concierge team is available around the clock,
              anywhere in the world ensuring your peace of mind.
            </p>
          </div>

          <div className="feature-card">
            <span className="material-symbols-outlined feature-icon">
              payments
            </span>

            <h3 className="feature-heading">Transparent Pricing</h3>

            <p className="feature-description">
              No hidden fees or unexpected surcharges. What you see during the
              search is exactly what you pay at checkout.
            </p>
          </div>

          <div className="feature-card">
            <span className="material-symbols-outlined feature-icon">
              encrypted
            </span>

            <h3 className="feature-heading">Secure Booking</h3>

            <p className="feature-description">
              Utilizing industry-leading encryption to keep your personal data
              and financial transactions completely secure.
            </p>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <span className="material-symbols-outlined">mail</span>
          <h2 className="title">Elevate Your Travel Intelligence</h2>
          <p className="description">
              Join 500,000+ frequent and flyers and receive exclusive fare alerts, travel tips, and premium <br/>
              offers directly in your inbox.
          </p>
          <div className="mail">
              <input type="text" placeholder="Enter your business email"/>
              <button className="mail-sub">Subscribe</button>
          </div>
      </div>
      <Footer />
    </>
  );
}
