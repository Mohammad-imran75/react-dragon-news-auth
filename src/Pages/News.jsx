import { useParams } from "react-router-dom";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";


const News = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
      <Header></Header>
      <Navbar />
      <div className="grid grid-cols-4">
       
        <div className="col-span-3">
        <h2 className="text-2xl">News details</h2>
        <p>{id}</p>
        <p>{id.title}</p>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
