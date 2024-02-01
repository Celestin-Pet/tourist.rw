import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../Navbar/NavLinks';
import logoImage from './logotour.jpg';

const NavBar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setisOpen] = React.useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-2 ${!top && 'bg-white shadow-lg'}`}>
      <div className="flex flex-row justify-between items-center py-1">
        <div className="flex flex-row justify-center md:px-4 md:mx-2 items-center text-center font-semibold">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="h-10" />
          </Link>
        </div>

        <div className="group flex flex-col items-center">
          <button className="p-1 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
            <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">

            </svg>
          </button>
          <div className='hidden space-x-0.6 lg:inline-block p-2'>
            <NavLinks />
          </div>

          <div className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-2 bg-white rounded-lg block lg:hidden shadow-xl top-10 ${isOpen ? "block" : "hidden"}`}>
            <div className='flex flex-col space-y-1'> 
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
