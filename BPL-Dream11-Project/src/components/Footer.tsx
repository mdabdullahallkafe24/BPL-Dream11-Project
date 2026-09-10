import logoFooter from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white mt-48 pt-24 pb-8 relative">
      <div className="container mx-auto px-4 absolute -top-24 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 text-center text-slate-900 shadow-2xl bg-linear-to-r from-blue-100 via-white to-amber-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">Get the latest updates and news right in your inbox!</p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none text-black bg-white"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-amber-400 to-pink-500 font-bold text-black rounded-xl hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16">
        <div className="flex justify-center mb-8">
          <img src={logoFooter} alt="Footer Logo" className="h-20 w-auto object-contain" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-400 text-sm py-8 border-b border-gray-800">
          <div>
            <h3 className="text-white font-semibold text-base mb-3">About Us</h3>
            <p className="leading-relaxed">
              We are a passionate team dedicated to providing the best services to our customers. Build your ultimate Dream 11 cricket team today!
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-3">Quick Links</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-3">Subscribe</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-2 rounded-lg bg-gray-800 text-white text-sm focus:outline-none w-full"
              />
              <button className="px-4 py-2 bg-linear-to-r from-amber-400 to-pink-500 font-bold text-black text-xs rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8">
          <p>@2026 BPL Dream11 Team. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;