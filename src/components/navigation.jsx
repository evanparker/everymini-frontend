import { Navbar, DarkThemeToggle } from "flowbite-react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

function Navigation({token}) {

  return (
    <Navbar fluid rounded>
    <Navbar.Collapse>
      <Navbar.Link as={Link} to={"/"}>
        Home
      </Navbar.Link>
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
      <Navbar.Link as={Link} to={"/minis"}>
        Minis
      </Navbar.Link>
      {token && (
        <Navbar.Link as={Link} to={"/minis/new"}>
          New Mini
        </Navbar.Link>
      )}
    </Navbar.Collapse>
    <DarkThemeToggle />
  </Navbar>

  )
}
Navigation.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Navigation