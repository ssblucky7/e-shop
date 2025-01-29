import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Search from './Search';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from '../hooks/useMobile';
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import UserMenu from './UserMenu';

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  const [openUserMenu, setOpenUserMenu] = useState(false); // Fixed useState typo

  console.log('user from store', user);

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  return (
    <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 flex flex-col justify-center gap-1 bg-white'>
      {!(isSearchPage && isMobile) && (
        <div className='container mx-auto flex items-center px-2 justify-between'>

          {/** Logo */}
          <div className='h-full'>
            <Link to={"/"} className='h-full flex justify-center items-center'>
              <img
                src={logo}
                width={170}
                height={60}
                alt='logo'
                className='hidden lg:block'
              />
              <img
                src={logo}
                width={120}
                height={60}
                alt='logo'
                className='lg:hidden'
              />
            </Link>
          </div>

          {/** Search */}
          <div className='hidden lg:block'>
            <Search />
          </div>

          {/** Login and My Cart */}
          <div className=''>
            {/* User icon (only in mobile mode) */}
            <button className='text-yellow-300 lg:hidden mt-2'>
              <FaRegCircleUser size={26} />
            </button>

            {/** Login and My Cart (Desktop mode) */}
            <div className='hidden lg:flex items-center gap-10'>
            
            {
               user?._id ? (
                <div className= 'relative'>
                  <div onClick={()=>setOpenUserMenu(preve => !preve)} className='flex select-none items-cener gap-2 cursor-pointer'>
                    <p>Account</p>
                    {
                      openUserMenu ? (
                             < GoTriangleUp size={25}/>
                      ) : (
                        <GoTriangleDown size={25}/>
                      )
                    }
                    
                  
                  </div>
                  {
                    openUserMenu && (
                      <div className = 'absolute right-0 top-12'>
                      <div className= 'bg-white-400 rounded p-4 min-w-52 lg: shadow-lg'>
                        <UserMenu/>

                      </div>
                      
                    </div>
                    )
                  }
                
                </div>
              ) : (
                <button onClick={redirectToLoginPage} className='text-lg px-2'>Login</button>
              )}

              <button className='flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-3 rounded text-white'>
                {/* Add to Cart Icon */}
                <div className='animate-bounce'>
                  <BsCart4 size={26} />
                </div>
                <div className='font-semibold'>
                  <p>My Cart</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='container mx-auto px-2 lg:hidden'>
        <Search />
      </div>
    </header>
  );
}

export default Header;
