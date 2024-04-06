import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const haldleSignOut = () =>{
    logOut()
    .then(result =>{
      console.log(result.user,'logged out')
    .catch(error =>console.error(error));
    })
  }
  return (
    <div className="navbar bg-base-100 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/carrer'>Carrer</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Resigter</NavLink>
            </li>
          </ul>
            
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/carrer'>Carrer</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Resigter</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
      <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/NLFTgR1/user.png" />
        </div>
        {
          user ? <button onClick={haldleSignOut} className="btn btn-ghost bg-slate-500 ml-4">Sign Out</button>:<Link to='/login'>
          <button className="btn btn-ghost bg-slate-500 ml-4">Login</button>
          </Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
