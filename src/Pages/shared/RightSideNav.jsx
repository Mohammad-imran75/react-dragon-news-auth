import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Login with</h1>
        <button className="btn mt-5">
          <FcGoogle />
          Login with google
        </button>
        <button className="btn mt-5">
          <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">Find Us on</h1>
        <a
          className="flex p-2 items-center  gap-8 mt-4 border-2 rounded-t-lg"
          href=""
        >
          <FaFacebookSquare className="text-blue-600 text-2xl ml-4 rounded-xl"></FaFacebookSquare>
          FaceBook
        </a>
        <a className="flex p-2 items-center gap-8 border-x-2" href="">
          <FaInstagramSquare className="text-blue-400 text-2xl ml-4 rounded-xl"></FaInstagramSquare >
          Instagram
        </a>
        <a
          className="flex p-2 items-center gap-8  border-2 rounded-b-lg"
          href=""
        >
          <FaTwitter className="text-blue-400 text-2xl ml-4 rounded-xl"></FaTwitter>
          Twiter
        </a>
      </div>
      <div className="bg-[#F3F3F3] mt-5">
        <h1 className="text-2xl font-bold p-2">Q Zune</h1>

        <img src="https://i.ibb.co/txnf2Rg/qZone1.png" alt="" />
        <img src="https://i.ibb.co/PzSMv2P/qZone2.png" alt="" />
        <img src="https://i.ibb.co/c37v0B5/qZone3.png" alt="" />
      </div>
      <div className="bg-[#05001DCC]">
            <h2 className="text-3xl font-bold text-white px-9 py-7 ">Create an Amazing Newspaper</h2>
            <p className="text-white mt-4 px-9">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
       
           <div className="flex justify-center ">
           <button className="btn btn-secondary mt-4 mb-4">Learn More </button>
           </div>
            
      </div>
    </div>
  );
};

export default RightSideNav;
