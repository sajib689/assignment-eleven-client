import { useLoaderData } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Review from "../Review/Review";

const Details = () => {
  const details = useLoaderData();
  const { _id, title, description, img, price } = details;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                className="w-[500px] h-[auto]  rounded-lg shadow-2xl"
                src={img}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>

          <div className="w-1/2">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <p className="py-6 font-[600]">Price: {price} Tk</p>
            <button className="btn text-white bg-[#0178BD] hover:bg-[#0487d3]">Buy Now</button>
          </div>
        </div>
      </div>
      <Review _id={_id}></Review>
    </div>
  );
};

export default Details;
