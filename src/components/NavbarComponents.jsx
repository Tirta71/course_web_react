import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavbarComponents = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  }, []);

  return (
    <div className={"test " + (changeColor ? "color-active" : "")}>
      <Navbar expand="lg" style={{ backgroundColor: "transparent" }}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            Coding Course
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((dataNav) => (
                <div key={dataNav.id} className="nav-link">
                  <NavLink
                    to={dataNav.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    end
                  >
                    {dataNav.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">
                Join With Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
