import { FaEye } from "react-icons/fa6";
import { FaBookmark, FaShareAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

const DragonNews = ({ aNews }) => {
  const { title,_id,thumbnail_url, details, total_view, rating, author } = aNews;
  return (
    <div className="card p-4 bg-base-100 shadow space-y-3">
      <div className="flex items-center justify-between mb-4 bg-slate-300 p-4 rounded-lg">
        <div className="flex items-center gap-4">
          <div>
            <img className="w-10 rounded-full" src={author.img} alt="" />
          </div>
          <div>
            <p className="font-semibold">{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div>
          <p className="text-2xl flex items-center gap-3">
            <FaBookmark></FaBookmark>
            <FaShareAlt></FaShareAlt>
          </p>
        </div>
      </div>
      <h2 className="card-title">{title}</h2>
      <figure>
        <img src={thumbnail_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link to={`/aNews/${_id}`} className="text-xl font-semibold text-blue-400">
              Read more ..
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <p>{rating.badge}</p>
          <p>{rating.number}</p>
        </div>
        <div>
          <p className="flex items-center gap-3">
            <FaEye></FaEye>
            {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DragonNews;
