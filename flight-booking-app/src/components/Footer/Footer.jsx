import "./Footer.css";


export default function Footer() {
    return (
      <div className="footer">
          <div className="footer-logo">
              <h1>SkyGuide</h1>
              <p>© 2024 SkyGuide Travel. All rights reserved.</p>
          </div>
          <div className="footer-nav">
              <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Careers</a></li>
              </ul>
          </div>
          <div className="footer-icons">
              <span className="material-symbols-outlined">globe</span>
              <span className="material-symbols-outlined">share</span>
          </div>
      </div>
    );
}