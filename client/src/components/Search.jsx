import React from 'react'
import { IoSearch } from "react-icons/io5";


const Search = () => {
  return (
   <div className='W-full bg-red-500 min-w-[420px] h-12 rounded-lg border p-hidden'>
    <button className='flex justify-center items-center h-full p-3 text-neutral-600'>
    <IoSearch size={22}/>
    </button>

   </div>
  )
}

export default Search
