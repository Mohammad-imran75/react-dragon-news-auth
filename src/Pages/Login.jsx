import React, { useContext } from "react";
import Navbar from "./shared/Navbar";
import { Link ,useLocation,useNavigate} from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const location = useLocation()
  console.log(location);
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLoginUser = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    loginUser(email,password)
    .then(result =>{
      console.log(result.user);
      navigate(location?.state? location.state:'/')
    })
    .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar />
      <h2 className="text-2xl text-center m-4 font-semibold">Login Your account</h2>
      <div className="md:w-3/4 lg:w-1/3 mx-auto shadow bg-base-100">
        <form onSubmit={handleLoginUser} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text fontb">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div>
            <h3 className="text-center p-3">Do not have any acount <Link to='/register' className="font-bold text-blue-600">Register</Link></h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
