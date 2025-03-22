import { Link, Route, Routes } from 'react-router-dom';
import useUserData from './useUserData';
import './App.css'
import Login from './components/auth/login'
import Logout from './components/auth/logout'
import Minis from './components/minis/minis';
import Mini from './components/minis/mini';
import MiniEdit from './components/minis/miniEdit';
import MiniNew from './components/minis/miniNew';
import User from './components/users/user';
import {DarkThemeToggle, Navbar} from 'flowbite-react';

function App() {
  const {token, setUserData, resetUserData} = useUserData();

  return (
    <>
      <Navbar fluid rounded>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to={'/'}>Home</Navbar.Link>
        {!token && <Navbar.Link as={Link} to={'/login'}>Login</Navbar.Link>}
        {token && <Navbar.Link as={Link} to={'/logout'}>Logout</Navbar.Link>}
        <Navbar.Link as={Link} to={'/minis'}>Minis</Navbar.Link>
        {token && <Navbar.Link as={Link} to={'/minis/new'}>New Mini</Navbar.Link>}

      </Navbar.Collapse>
        {/* <li><Link to={'/'}>Home</Link></li>
        {!token && <li><Link to={'/login'}>Login</Link></li>}
        {token && <li><Link to={'/logout'}>Logout</Link></li>}
        <li><Link to={'/minis'}>Minis</Link></li> 
        {token && <li><Link to={'/minis/new'}>New Mini</Link></li>} */}
        <DarkThemeToggle />
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
          </>
        } />
        <Route
          path="/login"
          element={<Login setUserData={setUserData}/>}
        />
        <Route
          path="/logout"
          element={<Logout resetUserData={resetUserData}/>}
        />
        <Route
          path="/minis"
          element={<Minis/>}
        />
        <Route
          path="/minis/:id"
          element={<Mini/>}
        />
        <Route
          path="/minis/:id/edit"
          element={<MiniEdit/>}
        />
        <Route
          path="/minis/new"
          element={<MiniNew/>}
        />
        <Route
          path="/users/:username"
          element={<User/>}
        />
      </Routes>

    </>

  )
}

export default App
