import bannerMain from "./banner-main.png";
import bgShadow from "./bg-shadow.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 my-6">
      <div
        className="relative overflow-hidden rounded-3xl bg-black bg-cover bg-center py-16 px-6 text-center text-white flex flex-col items-center justify-center space-y-6"
        style={{
          backgroundImage: `url(${bgShadow}), linear-gradient(to right, #0d1117, #161b22)`,
        }}
      >

        
       <div className="max-w-60">
   <img src={bannerMain} alt="Cricket Banner"
    className="w-full h-auto object-contain"
    />
        </div>



        <div className="space-y-3">
          <h1 className="text-2xl md:text-4xl font-bold tracking-wide">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-medium">
            Beyond Boundaries Beyond Limits
          </p>
        </div>




        <div className="p-1.5 border border-[#E7FE29] rounded-2xl">
          <button className="bg-[#E7FE29] text-black font-bold px-5 py-3 rounded-xl hover:bg-yellow-300 transition-colors">
            Claim Free Credit
          </button>
        </div>

      </div>
    </div>
  );
};

export default Banner;