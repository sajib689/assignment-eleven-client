import img from "../../assets/images/1.webp";
const AboutDoctor = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm  rounded-lg shadow-2xl" />
          <div className="w-1/2">
            <h2 className="text-3xl font-[600]">MEET THE DOCTOR</h2>
            <h1 className="text-4xl font-bold">Dr. Shihabur Rahman</h1>
            <p className="text-2xl font-bold">BDS, FCPS, FWFO (USA)</p>
            <p className="py-6">
              LASER DENTAL is one of the most hi-tech dental clinics in Dhaka,
              serving all of your dental needs with special emphasis on 3D
              Dental Scanning, 3D Face Scanning, Guided Dental Implant Surgery,
              Digital Smile Design, Laser Dentistry, Invisalign Clear Aligner,
              ZOOM! Teeth whitening, Computerised Injection Facility, Painless
              Injection Facility, Dental Braces, and Scanning whole mouth with
              world’s most advanced Intraoral Caries & Plaque Scanner and many
              more. Are you looking for the best dentist, a dentist near me, or
              the best dental clinic in Uttara, Dhaka, Bangladesh? Yes, you are
              in the right place. One of Bangladesh’s best cosmetic dentists,
              Dr. Shihabur Rahman, received advanced training in Digital Smile
              Design from Europe. Additionally, he has specialised training from
              Europe by Straumann in Guided Dental Implant surgery. He also
              specialises in same day full mouth rehabilitation and All-on-4
              Guided Implant surgery from USA.
            </p>
            <button className="btn text-white bg-[#0178BD] hover:bg-[#0487d3]">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
