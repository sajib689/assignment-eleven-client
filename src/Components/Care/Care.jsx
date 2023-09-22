import img1 from "../../assets/images/2.webp";
import img2 from "../../assets/images/3.webp";
import img3 from "../../assets/images/4.webp";
import img4 from "../../assets/images/5.webp";
import img5 from "../../assets/images/6.webp";
import img6 from "../../assets/images/7.webp";
const Care = () => {
  return (
    <div>
      <div className="bg-base-200">
        <div>
          <h1 className="text-center text-3xl mb-7">WE’RE CREATIVE CRAFTING WITH LOVE</h1>
        </div>
        <div className="grid lg:grid-cols-3 m-10 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex items-center mb-10">
            <img src={img1} alt="" />
            <div className="ps-2">
              <h2 className=" font-bold mb-2">TEETH WHITENING</h2>
              <p>
                “Transform your smile with our professional teeth whitening
                services – because a brighter, more confident you starts with a
                radiant smile!”
              </p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <img src={img2} alt="" />
            <div className="ps-2">
              <h2 className=" font-bold mb-2">DENTAL BRACES</h2>
              <p>
                “Discover your confident smile with our expert orthodontic care.
                Straighten your teeth, transform your life!”
              </p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <img src={img3} alt="" />
            <div className="ps-2">
              <h2 className=" font-bold mb-2"> INVISALIGN CLEAR ALIGNER</h2>
              <p>
                “Unlock your perfect smile with Invisalign Clear Aligner at our
                dental clinic – the clear choice for a confident, straighter,
                and more beautiful you.”
              </p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <img src={img4} alt="" />
            <div className="ps-2">
              <h2 className=" font-bold mb-2"> INVISALIGN CLEAR ALIGNER</h2>
              <p>
                “Transform your smile with precision and elegance – Discover the
                brilliance of Ceramic Crowns at our trusted dental clinic.”
              </p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <img src={img5} alt="" />
            <div className="ps-2">
              <h2 className=" font-bold mb-2"> ROOT CANAL TREATMENT</h2>
              <p>
                “Get relief and a radiant smile in just one day with our
                Same-Day Root Canal Treatment – your dental health, our
                priority!”
              </p>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <img src={img6} alt="" />
            <div className="ps-2">
              <h2 className=" font-bold mb-2">VENEER</h2>
              <p>
                “Transform your smile with our expert Veneer services – the
                secret to a brighter, more confident you!”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
