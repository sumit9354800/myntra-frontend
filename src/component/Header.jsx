import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router";
function Header() {

  const bag = useSelector(data => data.bag);
  // console.log(bag);

  return (<>
    <nav className="bg-white border-gray-200 shadow-md sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="images/myntra_logo.webp" className="h-10" alt="Flowbite Logo" />
        </Link>
        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 hover:text-white rounded-md md:hidden hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-pink-500 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col justify-center items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="#" className="block py-2 px-3 hover:border-b-pink-700 hover:shadow-[0_5px_0_#EB008B] text-black md:p-0" aria-current="page">MAN</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 hover:border-b-pink-700 hover:shadow-[0_5px_0_#EB008B] text-gray-900 md:p-0">WOMEN</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 hover:border-b-pink-700 hover:shadow-[0_5px_0_#EB008B] text-gray-900 md:p-0">KIDS</a>
            </li>
            <li>
              <Link to="/" className=" block py-2 px-3 hover:border-b-pink-700 hover:shadow-[0_5px_0_#EB008B] text-gray-900 md:p-0 ">HOME</Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 hover:border-b-pink-700 hover:shadow-[0_5px_0_#EB008B] text-gray-900 md:p-0">BEAUTY</a>
            </li>
            <li>
              <a href="#" className=" block py-2 px-3 hover:border-b-pink-700 hover:shadow-[0_5px_0_#EB008B] text-gray-900 md:p-0 ">GENZ</a>
            </li>
            <div>
              <input
                type="search"
                className="bg-gray-100 border border-gray-300 focus:outline-none focus:border-gray-300 focus:ring-0 dark:bg-gray-200 rounded-md w-[50vw] md:w-[30vw] py-2 px-3 text-sm"
                placeholder="Search for products, brands and more"
              />
            </div>
            <div className="flex gap-5 mt-5 md:mt-0">
              <a href="#" className="flex flex-col justify-center items-center">
                <IoPersonOutline className="text-xl" />
                <span>Profile</span>
              </a>
              <a href="#" className="flex flex-col justify-center items-center">
                <IoHeartOutline className="text-xl" />
                <span>Wishlist</span>
              </a>
              <Link to="/bag" className="flex flex-col justify-center items-center">
                <button type="button" className="relative ">
                  <BsBag className="w-5 h-5"></BsBag>
                  <div className="absolute inline-flex items-center justify-center rounded-full w-5 h-5 text-sm font-bold text-white bg-red-500 -top-3 -end-3">{bag.length}</div>
                </button>
                <span>Bag</span>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>

  </>)

}

export default Header;