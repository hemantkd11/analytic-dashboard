import React, { useState } from "react";
import "../Navbar/nav.css";
import Swal from "sweetalert2";
import { useNavigate, Link, Outlet } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
// import DrawerNav from "../Drawer/DrawerNav";
import {
  FaAccessibleIcon,
  FaAccusoft,
  FaAd,
  FaAddressBook,
  FaAdjust,
  FaAmazon,
  FaBars,
  FaDatabase,
} from "react-icons/fa";
import SettingsIcon from "@mui/icons-material/Settings";
const Navbar = ({ isAuthenticated, setIsAuthenticated, user }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [isMenuClicked, setIsMenuClicked] = useState(true);

  const handlebtndashboard = (e) => {
    setIsOpen(!isOpen);
    setIsMenuClicked(true);
  };

  const handlebtntools = (e) => {
    setIsOpen(!isOpen);
    setIsMenuClicked(false);
  };
  // const handleClick = () => {
  //   alert("Please Login ");
  //   navigate("/signin");
  // };
   const toptrends = () => {
  
    navigate("/toptrends");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };
  const DeleteUser = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "That you want to logout from the App",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, logout",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          handleLogout();
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "You are now loged out from the App",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  const menuItem = [
    {
      path: "/analyticsdashboard",
      name: "Analytical Dashboard",
      icon: <FaAccusoft />,
    },
    {
      path: "/sales-analytic-view-dashboard",
      name: " Sales Analytical Dashboard",
      // icon: <FcSalesPerformance />
      icon: <FaAmazon />,
    },
    {
      path: "/c",
      name: "Com Analytical Dashboard",
      // icon: <MdCompareArrows />
      icon: <FaAddressBook />,
    },
    {
      path: "/",
      name: "Social Media Analytical Dashboard",
      // icon: <MdSocialDistance />
      icon: <FaDatabase />,
    },
    {
      path: "/",
      name: "Supply Chain Dashboard",
      // icon: <GiBreakingChain />
      icon: <FaAccessibleIcon />,
    },
    {
      path: "/market-analytic-view-dashboard",
      name: "Marketing Analytics Dashboard",
      // icon: <SiCoinmarketcap />

      icon: <FaAccusoft />,
    },
    {
      path: "/",
      name: "Profit Margin Analysis Dashboard",
      // icon: <GiProfit />
      icon: <FaAd />,
    },
    {
      path: "/",
      name: "Inventory Analysis Dashboard7 ",
      // icon: <MdOutlineInventory />
      icon: <FaAdjust />,
    },
  ];
  const TOOLITEM = [
    {
      path: "/analyticsdashboard",
      name: " Sales Toolkit",
      icon: <FaAccusoft />,
    },
    {
      path: "/sales-analytic-view-dashboard",
      name: "Marketing Toolkit",
      // icon: <FcSalesPerformance />
      icon: <FaAmazon />,
    },
    {
      path: "/c",
      name: " Profit Margin Toolkit",
      // icon: <MdCompareArrows />
      icon: <FaAddressBook />,
    },
    {
      path: "/",
      name: "Social Media Management Tools",
      // icon: <MdSocialDistance />
      icon: <FaDatabase />,
    },
    {
      path: "/",
      name: "Menu Management Tools",
      // icon: <GiBreakingChain />
      icon: <FaAccessibleIcon />,
    },
    {
      path: "/",
      name: "Supplier Hub",
      // icon: <SiCoinmarketcap />

      icon: <FaAccusoft />,
    },
    {
      path: "/",
      name: "Haccp Training & Task Planning ",
      // icon: <GiProfit />
      icon: <FaAd />,
    },
    {
      path: "/",
      name: "Ooperations Analysis Repport & Scorecards",
      // icon: <MdOutlineInventory />
      icon: <FaAdjust />,
    },
    {
      path: "/",
      name: "Integration Management",
      // icon: <MdOutlineInventory />
      icon: <FaAdjust />,
    },
    {
      path: "/",
      name: "Brand Rating & Comparison",
      // icon: <MdOutlineInventory />
      icon: <FaAdjust />,
    },
    {
      path: "/",
      name: "Security",
      // icon: <MdOutlineInventory />
      icon: <FaAdjust />,
    },
    {
      path: "/",
      name: "Settings",
      // icon: <MdOutlineInventory />
      icon: <SettingsIcon />,
    },
  ];

  return (
    <>
      <div className="nav-wrapper-box">
        <nav class="nav-container">
          {/* <div><DrawerNav/></div>  navbar navbar-expand-lg bg-body-tertiary */}
          <div class="container-flui d nav-main-container">
            {/* <div className="Sidebar-btn">
            <FaBars className="sidebar-click-btn"  />
          </div> */}
            <div>
              <a class="navbar-brand" href="#">
                <div className="logo">
                  <Link to="/">
                    <img src="/cclogo1.png" />
                  </Link>
                </div>
              </a>
            </div>
            {isAuthenticated ?
            <div class="nav-list-box" id="navbarNavDropdown">
              <ul class="navbar-nav">
              <li class="nav-item cr">
                  <a class="nav-link" onClick={toptrends}>
                    TopTrends
                  </a>
                </li>
                <li class="nav-item cr">
                  <a class="nav-link" onClick={handlebtndashboard}>
                    DashBoard
                  </a>
                </li>
                <li class="nav-item cr">
                  <a class="nav-link" onClick={handlebtntools}>
                    Solutions
                  </a>
                </li>
              </ul>
            </div>: "" }

            {/* user and log out */}
            <div className="right-navbar">
              {isAuthenticated ? (
                <div className="user-profile">
                  <PersonIcon />
                  <span className="user-name">{user}</span>
                </div>
              ) : (
                <div className="user-profile">
                  {" "}
                  <PersonIcon /> Guest
                </div>
              )}

              <div className="nav-logout-btn">
                {isAuthenticated ? (
                  <button onClick={DeleteUser} className="btn-logOut">
                    Logout
                  </button>
                ) : (
                  <button className="btn-logOut">
                    <Link to={"/signin"}>Login</Link>
                  </button>
                )}
              </div>
            </div>

            {/* side drawer */}
            <div
              className={isOpen ? "sidebar-list-items" : "sidebar-list"}
              onClick={() => setIsOpen(false)}
            >
              <div className="side-bar-body">
                {(isMenuClicked ? menuItem : TOOLITEM).map((item, index) => (
                  <div key={index} className="sidedrawer-list">
                    <Link
                      to={item.path}
                      key={index}
                      className="link "
                      activeClassName="active"
                    >
                      <div className="icon">{item.icon}</div>
                      <div className="link-tex">{item.name}</div>
                    </Link>
                  </div>
                ))}
              </div>
              {/* {(isMenuClicked ? menuItem : TOOLITEM).map((item, index) => (
                <div key={index} className="sidedrawer-list">
                  <Link
                    to={item.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{item.icon}</div>
                    <div className="link-tex">{item.name}</div>
                  </Link>
                </div>
              ))} */}
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
