import React, {useEffect, useState} from 'react'
import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import useMobile from '../hooks/useMobile';


const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const [isSearchPage, setIsSearchPage] = useState(false)
  const [ isMobile ] = useMobile()

  useEffect(() => {
    const isSearch = location.pathname === "/search"
    setIsSearchPage(isSearch)
  }, [location])



  const redirectToSearchPage = () => {
    navigate("/search")
  }



  
  return (
   <div className='W-full min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-200'>
   
     {
        (isMobile && isSearchPage) ? (
          <Link to={"/"} className='flex justify-center items-center h-full p-2 m-1 group-focus-within:text-primary-200 bg-white rounded-full shadow-md'>
          <FaArrowLeft size={20}/>
          </Link>

        ) : (
          <button className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200'>
          <IoSearch size={22}/>
        </button>
        )
     }
    
  

    <div className='w-full'>
        {
          !isSearchPage ? (
            // not in search page
            <div onClick={redirectToSearchPage} className='w-full h-full flex items-center'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Search "sweater"',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Search "pant"',
                1000,
               'Search "jacket"',
                1000,
                'Search "bodycon"',
                1000,
                'Search "onepiece"',
                1000,
                'Search "t-shirt"',
                1000,
                'Search "mini-skirt"',
                1000,
                'Search "hoodie"',
                1000,
                'Search "cardigan"',
                1000,
                'Search "bodycon"',
                1000,
                'Search "coat"',
                1000,
                'Search "track-suit"',
                1000
              ]}
              wrapper="span"
              speed={50}
             
              repeat={Infinity}
            />
            </div>
          ) : (
            // when in search page
            <div className='w-full h-full'>
              <input 
                type='text'
                placeholder='Search for products' 
                autoFocus
                className='bg-transparent w-full h-full outline-none'
              />
            </div>
          )
        }
    </div>


   </div>
  )
}


export default Search;

