import { Link, Route, Routes } from 'react-router-dom';
import useUserData from './useUserData';
import './App.css'
import Login from './components/login'
import Logout from './components/logout'
import Minis from './components/minis';
import Mini from './components/mini';

function App() {
  const {token, setUserData, resetUserData} = useUserData();

  return (
    <>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          {!token && <li><Link to={'/login'}>Login</Link></li>}
          {token && <li><Link to={'/logout'}>Logout</Link></li>}
          <li><Link to={'/minis'}>Minis</Link></li> 
        </ul>
      </nav>
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
          element={<Logout token={token} resetUserData={resetUserData}/>}
        />
        <Route
          path="/minis"
          element={<Minis/>}
        />
        <Route
          path="/minis/:id"
          element={<Mini/>}
        />
        {/* <Route
          path="/minis/:id/edit"
          element={<MiniEdit/>}
        /> */}
        {/* <Route
            path="/upload"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Upload />
              </Suspense>
            }
          />
          <Route
            path="/apiupload"
            element={
              <Suspense fallback={<>Loading...</>}>
                <ApiUpload />
              </Suspense>
            }
          />
          <Route
            path="/album"
            element={
              <Suspense fallback={<>Loading...</>}>
                <Album />
              </Suspense>
            }
          /> */}
      </Routes>

    </>

  )
}

export default App
