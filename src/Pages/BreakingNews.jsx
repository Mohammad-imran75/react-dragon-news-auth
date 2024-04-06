import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex items-center mt-5">
      <div>
        <button className="btn btn-secondary text-white">Latest</button>
      </div>
      <div>
        <Marquee speed={200} pauseOnHover={true }>
          <Link className="bg-[#F3F3F3] py-3 px-24 text-[#403F3F] font-semibold">I can be a React component, multiple React components, or just some
          text.</Link>
          <Link className="bg-[#F3F3F3] inline-block py-3 px-24 text-[#403F3F] font-semibold">I can be a React component, multiple React components, or just some
          text.</Link>
          <Link className="bg-[#F3F3F3] py-3 px-10 text-[#403F3F] font-semibold ">I can be a React component, multiple React components, or just some
          text.</Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
