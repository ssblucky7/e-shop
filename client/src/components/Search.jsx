import React from 'react'
import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation';


const Search = () => {

  // const navigate = useNavigate()

  // const redirectToSearchPage = ()=>{
  //   navigate("/search")
 

  return (
   <div className='W-full min-w-[300px] lg:min-w-[420px] h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50'>
    <button className='flex justify-center items-center h-full p-3'>
      <IoSearch size={22}/>
    </button>
    <div>
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

   </div>
  )
}


export default Search
