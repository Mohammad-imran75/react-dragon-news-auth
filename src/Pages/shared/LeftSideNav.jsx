import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFilterFrames } from "react-icons/md";
import moment from 'moment';
const LeftSideNav = () => {
  const [catagoreies, setCatagories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-semibold">All catagorey</h2>

      <div>
        <h2 className="font-semibold p-2 bg-[#E7E7E7] text-center mt-4">
          National News
        </h2>
        {catagoreies.map((categorey) => (
          <Link
            className="block text-[#9F9F9F] text-[20px] p-6 mr-8"
            key={categorey.id}
          >
            {categorey.name}
          </Link>
        ))}
      </div>
      <div className="space-y-4">
      <div className="card  bg-base-100 shadow">
        <figure className=" pt-10">
          <img
            src="https://i.ibb.co/jk6PHpn/1.png"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        </div>
        <div className="flex justify-between p-3">
            <h1 className="font-medium">Sports</h1>
            <div className="flex gap-2">
                <MdFilterFrames className="text-2xl"/>
                <h1>{moment().format("MMMM D, YYYY")}</h1>
            </div>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img
            src="https://i.ibb.co/5TKY9qn/2.png"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        </div>
        <div className="flex justify-between p-3">
            <h1 className="font-medium">Sports</h1>
            <div className="flex gap-2">
                <MdFilterFrames className="text-2xl"/>
                <h1>{moment().format("MMMM D, YYYY")}</h1>
            </div>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className=" pt-10">
          <img
            src="https://i.ibb.co/tCSmmKV/3.png"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
        </div>
        <div className="flex justify-between p-3">
            <h1 className="font-medium">Sports</h1>
            <div className="flex gap-2">
                <MdFilterFrames className="text-2xl"/>
                <h1>{moment().format("MMMM D, YYYY")}</h1>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
