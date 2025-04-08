import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white py-3 sticky-top shadow-sm z-3">
      <div className="container">
        <div className="row align-items-center">
          {/* Name on the left */}
          <div className="col-6 text-start">
            <h1 className="h6 m-0">Chase Jefferson</h1>
          </div>

          {/* Nav on the right */}
          <div className="col-6 d-flex justify-content-end">
            <nav className="d-flex gap-4">
              {["about", "portfolio", "contact", "resume"].map((section) => (
                <NavLink
                  key={section}
                  to={`/${section}`}
                  className={({ isActive }) =>
                    `nav-link text-white px-2 ${
                      isActive ? "text-decoration-underline fw-bold" : ""
                    }`
                  }
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
