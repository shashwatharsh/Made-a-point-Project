import { useEffect, useRef, useContext } from "react";
import logo from "../../assets/images/logo.png";
import logo1 from "../../assets/images/logoRg2.png";
import logo2 from "../../assets/images/logoReady.png";
import avatar from "../../assets/images/avatar-icon.png"

import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";

const navData = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Book Appointment",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Dr Anuradha's Clinic logo will be here  */}
          <div className="">
            <img src={logo1} alt="Dr Anuradha" />
          </div>

          {/* main menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navData.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* right  */}
          <div className="flex items-center gap-4 bg-slate-500 shadow rounded-xl">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/user/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer ">
                    <img
                      src={user?.photo ?user?.photo : avatar }
                      className="w-full rounded-full"
                      alt="Profile"
                    />

                  </figure>

                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[35px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer " />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
