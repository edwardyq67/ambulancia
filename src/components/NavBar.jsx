import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate=useNavigate()
  return (
    <nav className="bg-kashmir-600 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex  items-center space-x-3 rtl:space-x-reverse">
          <img src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1718821372/images_app/logo-serviciosqhalikay.png" className="h-8" alt="Flowbite Logo" />
          
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <a href="tel:5541251234" className="text-md  text-gray-500 dark:text-white hover:underline hover:text-red-500 transition-all duration-150">(555) 412-1234</a>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-kashmir-600 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            <li>
              <a onClick={()=>navigate("/")} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Inicio</a>
            </li>
            <li>
              <a onClick={()=>navigate("/")} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Nosotros</a>
            </li>
            <li>
              <a onClick={()=>navigate("/")} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Servicios</a>
            </li>
            <li>
              <a onClick={()=>navigate("/")} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contactanos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
