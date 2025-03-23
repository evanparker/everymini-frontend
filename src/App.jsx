import { Route, Routes } from "react-router-dom";
import useUserData from "./useUserData";
import "./App.css";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import Minis from "./components/minis/minis";
import Mini from "./components/minis/mini";
import MiniEdit from "./components/minis/miniEdit";
import MiniNew from "./components/minis/miniNew";
import User from "./components/users/user";
import Navigation from "./components/navigation";
import Signup from "./components/auth/signup";

function App() {
  const { token, setUserData, resetUserData } = useUserData();

  return (
    <>
      <Navigation token={token} />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/login" element={<Login setUserData={setUserData} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/logout"
          element={<Logout resetUserData={resetUserData} />}
        />
        <Route path="/minis" element={<Minis />} />
        <Route path="/minis/:id" element={<Mini />} />
        <Route path="/minis/:id/edit" element={<MiniEdit />} />
        <Route path="/minis/new" element={<MiniNew />} />
        <Route path="/users/:username" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
