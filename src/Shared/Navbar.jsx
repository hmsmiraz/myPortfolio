import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <img src="/I.svg" alt="" className="h-16 w-16" />
        <a className="btn btn-ghost text-xl font-bold">
          HMS<span className="text-cyan-500">MIRAZ</span>
        </a>
      </div>

      <div className="navbar-end md:hidden lg:hidden ">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost dropdown-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
