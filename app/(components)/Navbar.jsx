const Navbar = () => {
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
            <i className="text-2xl fas fa-campground"></i>
            <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
              TechVZero
            </h1>
          </div>

          <div className="hidden md:flex">
            <ul className="hidden md:flex">
              <li className="text-lg pr-8 ">
                <a
                  href="/home"
                  className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                >
                  Home
                </a>
              </li>
              <li className="text-lg pr-8">
                <a className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">
                  About
                </a>
              </li>
              <li className="text-lg pr-8">
                <a className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">
                  Blog
                </a>
              </li>
              <li className="text-lg pr-8">
                <a className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
