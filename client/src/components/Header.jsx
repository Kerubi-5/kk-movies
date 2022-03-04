import { useDispatch } from "react-redux";
import { filterMovies } from "../state/movieReducer";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const Links = [
    {
      name: "Movies",
      link: "/",
    },
    {
      name: "Saved List",
      link: "/saved",
    },
  ];

  const linkStyle =
    "border-transparent border-b-2 hover:border-b-slate-600 duration-300";

  const [open, setOpen] = useState(false);
  const { loginWithRedirect, logout, user } = useAuth0();
  const dispatch = useDispatch();
  const handleSearch = (val) => {
    dispatch(filterMovies(val));
  };

  return (
    <nav className="shadow-md w-full sticky top-0 left-0 z-10 mb-5 bg-white md:bg-transparent hover:bg-white transition-all duration-300 ease-in-out">
      <div className="md:flex md:justify-between p-4 md:px-7">
        <div className="flex items-center">
          <h1 className="text-3xl">KK</h1>
          <div className="flex items-center bg-gray-200 p-2 rounded-full ml-2">
            <i className="bx bx-search-alt-2 text-gray-600 ml-2"></i>
            <input
              className="flex items-center mx-2 bg-transparent outline-none"
              type="text"
              placeholder="Search KK Movies"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          className={`flex flex-col md:items-center md:flex-row gap-5 md:my-0 md:bg-inherit  absolute md:static bg-white w-full md:w-auto left-0 pl-4 md:pl-0 py-5 md:py-0 transition-all duration-300 ease-in-out opacity-0 md:opacity-100
          ${open ? "opacity-100 top-15" : "-top-[-9999px] opacity-0"}
          `}
        >
          {Links.map((Link) => {
            return (
              <div key={Link.link}>
                <NavLink
                  to={Link.link}
                  //   className={`border-transparent border-b-2 hover:border-b-slate-600 duration-300`
                  // }

                  className={({ isActive }) => {
                    return isActive
                      ? `${linkStyle} border-b-slate-600`
                      : `${linkStyle}`;
                  }}
                >
                  {Link.name}
                </NavLink>
              </div>
            );
          })}
          <div>
            {user ? (
              <Button color="danger" click={logout}>
                Logout
              </Button>
            ) : (
              <Button color="success" click={loginWithRedirect}>
                Login
              </Button>
            )}
          </div>
        </div>
        <div
          className="absolute top-6 right-6 md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
