import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand logo" to="/">
        sodaG
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All About Acidity
            </a>
            <div class="dropdown-menu first-drop" aria-labelledby="navbarDropdown">
              <a class="dropdown-item first-drop-inside" href="#">
                Action
              </a>
              <li>
                <Link to="/gred">Is it Acidity, Reflux or Gerd</Link>
              </li>
              <li>
                <Link to="/indigestion">Is it Acidity or Indigestion</Link>
              </li>
              <li>
                <Link to="/stomach">Why does your Stomach hurt?</Link>
              </li>
              <a class="dropdown-item first-drop-inside" href="#">
                Acidity
              </a>
              <li>
                <Link to="/understand">Understanding Acidity</Link>
              </li>
              <li>
                <Link to="/symptoms">Initial Symptoms of Acidity</Link>
              </li>
              <li>
                <Link to="/living">Living Life Acidity Free</Link>
              </li>
              <li>
                <Link to="/remedies">Home Remedies for Acidity</Link>
              </li>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item first-drop-inside" href="#">
                Heartburn
              </a>
              <li>
                <Link to="/understandheartburn">Understanding Heartburn</Link>
              </li>
              <li>
                <Link to="/symptomsheartburn">
                  Initial Symptoms of Heartburn
                </Link>
              </li>
              <li>
                <Link to="/remediesheartburn">Home Remedies for Heartburn</Link>
              </li>
              <a class="dropdown-item first-drop-inside" href="#">
                Gas Relief
              </a>
              <li>
                <Link to="/gas">Gas Relief</Link>
              </li>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              sodaG Products
            </a>
            <div
              class="dropdown-menu second-drop"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="#">
                <Link to="/sachet">
                  <img
                    className="sachet-img"
                    src=""
                  />
                </Link>
              </a>
              <a class="dropdown-item" href="#">
                <Link to="/bottle">
                  <img
                    className="sachet-img"
                    src="https://img.freepik.com/free-psd/cosmetic-packaging-mockup_1150-40280.jpg?t=st=1651123363~exp=1651123963~hmac=83966c7a31fb8eac4d2656328a235b5a017795124f3b495b12acff0de1fb4ad7&w=360"
                  />
                </Link>
              </a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Discover sodaG
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                <Link to="/whateno">What is Eno</Link>
              </a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              Connect with sodaG
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
