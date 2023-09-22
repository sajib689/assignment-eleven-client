import AboutDoctor from '../AboutDoctor/AboutDoctor';
import '../Banner/Banner.css'
import Care from '../Care/Care';
import Services from '../Services/Services';
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 bg" >
        <div className="hero-content text-center">
          <div className="max-w-md text-[#0a344d]">
            <h1 className="text-5xl font-bold">The Smile Experts</h1>
            <p className="py-6">
              High-tech dental equipment and materials to make the dental
              treatments pain-free and comfortable unlike conventional
              dentistry..
            </p>
            <button className="btn text-white bg-[#0178BD] hover:bg-[#0487d3]">Get Started</button>
          </div>
        </div>
      </div>
      <AboutDoctor></AboutDoctor>
      <Services></Services>
      <Care></Care>
    </div>
  );
};

export default Banner;
