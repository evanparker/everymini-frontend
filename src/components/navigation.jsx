import { Navbar, DarkThemeToggle, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from "flowbite-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

function Navigation({ token }) {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} to={"/"}>
        <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Vite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Every Mini Painted</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} to={"/minis"}>
          Minis
        </NavbarLink>
        <NavbarLink as={Link} to={"/figures"}>
          Figures
        </NavbarLink>
        {token && (
          <NavbarLink as={Link} to={"/minis/new"}>
            <HiPlus className="inline"/> New Mini
          </NavbarLink>
        )}
        {!token && (
          <NavbarLink as={Link} to={"/login"}>
            Login
          </NavbarLink>
        )}
        {!token && (
          <NavbarLink as={Link} to={"/signup"}>
            Signup
          </NavbarLink>
        )}
        {token && (
          <NavbarLink as={Link} to={"/logout"}>
            Logout
          </NavbarLink>
        )}
      </NavbarCollapse>
    </Navbar>
  );
}
Navigation.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Navigation;
