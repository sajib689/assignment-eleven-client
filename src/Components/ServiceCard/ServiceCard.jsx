import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, description, price } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-48 w-80 min-h-full rounded-lg" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 100)}..</p>
          <p>Price: {price} Tk</p>
          <div className="card-actions justify-start">
            <Link to={`/details/${_id}`} className="btn text-white bg-[#0178BD] hover:bg-[#0487d3]">Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
