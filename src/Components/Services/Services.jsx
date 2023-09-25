import { useContext, useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Bar from "../Bars/Bars";

const Services = () => {
  const [displayService, setDisplayService] = useState(3);
  const [services, setServices] = useState([]);
  const {loading} = useContext(AuthContext)
 
  useEffect(() => {
    fetch(`https://assignment-eleven-server-r1xu.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleSeeAllClick = () => {
    setDisplayService(services.length);
  };
  return (
    <div>
     
      <h1 className="text-center text-5xl mb-20 mt-20">Our Services</h1>
     
      {
        loading ? 
        <div className="flex items-center justify-center">
          <Bar /> {/* Replace with your spinner component */}
        </div>
        :
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-5">
        {services.slice(0, displayService).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
        
      </div>
      
      }
      <div className="flex items-center justify-center mb-20">
      <Link onClick={handleSeeAllClick} to='/services' className="  btn text-white bg-orange-400 hover:bg-[#0487d3]">See All</Link>
      </div>
    </div>
  );
};

export default Services;
