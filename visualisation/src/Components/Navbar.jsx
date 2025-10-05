
import Logo from "./Logo";
function Navbar() {
  return (
    <>
      <nav className="bg-[#0369a0] sticky top-0 z-50 nav-shadow backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo />

            <nav className="bg-blue px-4 py-3 flex items-center justify-between relative">
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="https://www.nitj.ac.in/"
                  className="px-6 py-3 text-white hover:text-red-500 font-medium transition-colors duration-200 rounded-lg hover:bg-red-50"
                >
                  HOME
                </a>
                <a
                  href="/user-dashboard"
                  className="px-6 py-3  text-white hover:text-red-500 font-medium transition-colors duration-200 rounded-lg hover:bg-red-50"
                >
                  ADMINSTRATION
                </a>
                <a
                  href="/how-it-works"
                  className="px-6 py-3  text-white hover:text-red-500 font-medium transition-colors duration-200 rounded-lg hover:bg-red-50"
                >
                  ALUMINI
                </a>
                <a
                  href="/about"
                  className="px-6 py-3  text-white hover:text-red-500 font-medium transition-colors duration-200 rounded-lg hover:bg-red-50"
                >
                  LIFE AT NITJ 
                </a>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
