import { Navbar, DarkThemeToggle } from "flowbite-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

function Navigation({ token }) {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to={"/"}>
        <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Vite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Every Mini Painted</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to={"/minis"}>
          Minis
        </Navbar.Link>
        <Navbar.Link as={Link} to={"/figures"}>
          Figures
        </Navbar.Link>
        {token && (
          <Navbar.Link as={Link} to={"/minis/new"}>
            <HiPlus className="inline"/> New Mini
          </Navbar.Link>
        )}
        {!token && (
          <Navbar.Link as={Link} to={"/login"}>
            Login
          </Navbar.Link>
        )}
        {!token && (
          <Navbar.Link as={Link} to={"/signup"}>
            Signup
          </Navbar.Link>
        )}
        {token && (
          <Navbar.Link as={Link} to={"/logout"}>
            Logout
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
Navigation.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Navigation;
