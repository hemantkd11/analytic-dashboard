import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Pages/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Analytics from "./Pages/DashBoard/Analytics";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Pages/SignUp/SignUp";
import TopTrendHomePage from "./Pages/Home/TopTrendHomePage";
import SignIn from "./Pages/Login/SignIn";
import { Navigate } from "react-router-dom";
import Notresponding from "./Pages/NotRespond/Notresponding";

import Demopage from "./Pages/DemoContact/Demopage";
import New_footer from "./Components/Footer/New_footer";
import MarketDashboard from "./Pages/DashBoard/MarketDashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Check if the user is authenticated (e.g., by verifying the token from localStorage)
    // Set the isAuthenticated state accordingly
    const user = localStorage.getItem("user");
    if (!!token) {
      setIsAuthenticated(true);
      setUser(user);
    } else {
      setIsAuthenticated(false);
      setUser("");
    }
  }, []);
  const ProtectedRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
  };
  // <Route
  // path="/sales-analytic-view-dashboard"
  // element={
  //   <ProtectedRoute isAuthenticated={isAuthenticated}>
  //     <Analytics />
  //   </ProtectedRoute>
  // }
  ///>
  return (
    <div className="App">
      <Router>
        {/* <DrawerNav/> */}

        <Routes>
          <Route
            path="/signin"
            element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/signup" element={<SignUp/>} />
        

          <Route
            path="/"
            element={
              <Navbar
                setIsAuthenticated={setIsAuthenticated}
                isAuthenticated={isAuthenticated}
                user={user}
              />
            }
          >
            <Route index element={<Home />} />

            {isAuthenticated && isAuthenticated ? (
              <Route>
                <Route
                  path="/sales-analytic-view-dashboard"
                  element={<Analytics/>}
                />
                 <Route
                  path="/market-analytic-view-dashboard"
                  element={<MarketDashboard/>}
                />
                <Route path="/toptrends" element={<TopTrendHomePage/>} />
              </Route>
            ) : (
              <Route path="/nopage" element={<Notresponding/>} />
            )}
              <Route  path="/details" element={<Demopage/>}/>
          </Route>
        </Routes>

        {/* <Footer /> */}
        <New_footer/>
      </Router>
    </div>
  );
}

export default App;
// set PORT=3006 &&