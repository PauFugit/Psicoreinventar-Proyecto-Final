import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../img/nav-logo-final.png";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  // If user is not signed in, redirect to login
  useEffect(() => {
    if (store.currentUser === null) navigate("/login");
  }, [store.currentUser]);
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container-fluid p-0">
            <NavLink className="navbar-brand me-5" to="/">
              <img src={Logo} alt="project-logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Conditionally Rendering links if currentUser is different of null, if user is logged don't show navbar cta, only show a dropdown with the name of the user to signout*/}
                {!!store.currentUser ? (
                  <></>
                ) : (
                  <>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link fw-semibold link-gray me-2 active-link"
                            : "nav-link fw-semibold link-gray me-2"
                        }
                        aria-current="page"
                        to="/hey"
                      >
                        Cómo funciona
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link fw-semibold link-gray me-2 active-link"
                            : "nav-link fw-semibold link-gray me-2"
                        }
                        to="/specialists"
                      >
                        Especialistas
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>

              <div className="d-flex">
                <Link
                  className="btn btn-primary btn-md appointment-btn"
                  style={{ padding: ".5em 2em" }}
                  to="/appointment"
                >
                  Agendar cita
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <img src={Logo} alt="" />
        </li>
      </ul> */}
    </>
  );
};

export default Navbar;
