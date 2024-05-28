import { useState } from "react";

const SecondaryNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="mx-10 mt-5">
      <div className="container mx-auto px-4">
        <button className="navbar-toggler block md:hidden focus:outline-none focus:bg-gray-100 rounded p-2">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li className="nav-item">
              <a
                className="nav-link text-gray-900 font-semibold flex items-center space-x-2"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-microsoft h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"></path>
                </svg>
                <span>LeaderBoard</span>
              </a>
            </li>
            <li className="nav-item dropdown relative">
              <a
                className="nav-link text-gray-500 hover:text-gray-700 font-semibold flex items-center space-x-2"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen ? "true" : "false"}
                onClick={toggleDropdown}
              >
                <span>Historical Trading &#x25BE;</span>
              </a>
              {dropdownOpen && (
                <div className="dropdown-menu absolute bg-white shadow-md rounded mt-2 py-2 w-48">
                  <a className="dropdown-item block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Trading
                  </a>
                  <a className="dropdown-item block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Order
                  </a>
                  <a className="dropdown-item block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Holding
                  </a>
                  <a className="dropdown-item block px-4 py-2 text-gray-900 hover:bg-gray-100">
                    Position
                  </a>
                </div>
              )}
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-gray-500 hover:text-gray-700 font-semibold flex items-center space-x-2"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Historical Chart</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-gray-500 hover:text-gray-700 font-semibold flex items-center space-x-2"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Scanners</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-gray-500 hover:text-gray-700 font-semibold flex items-center space-x-2"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Alert</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-gray-500 hover:text-gray-700 font-semibold flex items-center space-x-2"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>Pricing</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-gray-500 hover:text-gray-700 font-semibold flex items-center space-x-2"
                id="navbarDropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>My Earnings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
