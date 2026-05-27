import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Support.css";
import FAQ from "../../components/FAQ/FAQ.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Support() {
  return (
    <>
      <Navbar />
      <section className="help-section">
        <div className="bg-circle top-circle"></div>
        <div className="bg-circle bottom-circle"></div>

        <div className="help-container">
          <h1>How can we help?</h1>

          <div className="search-box">
            <span className="material-symbols-outlined search-icon">
              search
            </span>

            <input
              type="text"
              placeholder="Search for flight changes, baggage rules, or SkyPass..."
            />

            <button>Search</button>
          </div>

          <div className="popular-links">
            <span>Popular:</span>

            <a href="#">Baggage allowance</a>

            <a href="#">Refund policy</a>

            <a href="#">Flight status</a>
          </div>
        </div>
      </section>
      <section className="help-categories">
        <div className="categories-grid">
          <div className="category-card">
            <div className="icon-box">
              <span className="material-symbols-outlined">event_note</span>
            </div>

            <h3>Booking & Cancellations</h3>

            <p>
              Manage your reservations, request refunds, or change flight dates
              easily.
            </p>
          </div>

          <div className="category-card">
            <div className="icon-box">
              <span className="material-symbols-outlined">luggage</span>
            </div>

            <h3>Baggage & Services</h3>

            <p>
              Find weight limits, restricted items, and add extra baggage to
              your trip.
            </p>
          </div>

          <div className="category-card">
            <div className="icon-box">
              <span className="material-symbols-outlined">flight_takeoff</span>
            </div>

            <h3>Check-in & Boarding</h3>

            <p>
              Learn about online check-in times, boarding procedures, and mobile
              passes.
            </p>
          </div>

          <div className="category-card">
            <div className="icon-box">
              <span className="material-symbols-outlined">loyalty</span>
            </div>

            <h3>SkyPass & Rewards</h3>

            <p>Earn points, redeem rewards, and view membership benefits.</p>
          </div>

          <div className="category-card">
            <div className="icon-box">
              <span className="material-symbols-outlined">description</span>
            </div>

            <h3>Travel Documents</h3>

            <p>
              Visa requirements, passport validity, and health documentation
              guidance.
            </p>
          </div>

          <div className="category-card">
            <div className="icon-box">
              <span className="material-symbols-outlined">accessible</span>
            </div>

            <h3>Special Assistance</h3>

            <p>
              Medical needs, traveling with pets, and unaccompanied minor
              support.
            </p>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  );
}
