import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";
import StickyNavbar from "./components/Navbar/Navbar";
import Landing from "./views/Landing";
import Cookies from "js-cookie";
import { useState, useContext } from "react";
import Quest from "./views/Quest";
import Characters from "./views/Characters";
import { jwtDecode } from "jwt-decode";
import Auth from "./components/auth/Auth";
import AuthContext from "./store/auth/AuthContextProvier";
import CharacterView from "./views/CharacterView";
interface MyToken {
  userId: number;
  name: string;
  email: string;
  haveActiveSubscription: boolean;
  // whatever else is in the JWT.
}
function App() {
  const infoToken = Cookies.get("infoToken");
  var decoded = infoToken ? jwtDecode<MyToken>(infoToken) : null;
  const haveActiveSubscription = decoded
    ? decoded.haveActiveSubscription
    : false;
  const [user, setUser] = useState();
  const { authState } = useContext(AuthContext);
  const location = useLocation();
  console.log(authState);
  return (
    <div className="h-full">
      <div className="h-full">
        <StickyNavbar user={user} setUser={setUser}>
          {!authState.isLoggedIn && (
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/login/other" element={<Login />} />
              <Route path="/register" element={<Auth />} />
            </Routes>
          )}
          {authState.isLoggedIn && (
            <Routes>
              <Route
                path="/dashboard"
                element={<Dashboard user={user} setUser={setUser} />}
              />
              <Route path="/quest" element={<Quest />} />
              <Route path="characters" element={<Characters />} />
              <Route
                path="character/:characterId"
                element={<CharacterView />}
              />
            </Routes>
          )}
        </StickyNavbar>
      </div>
    </div>
  );
}

export default App;
