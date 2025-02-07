<<<<<<< HEAD
import React, { useState } from 'react'
import UploadCategoryModel from '../components/UploadCategoryModel'

const CategoryPage = () => {
  const [openUploadCategory, setOpenUploadCategory] = useState(false)
  return (
    <section>
      <div className='p-2 bg-white shadow-md flex items-center justify-between'>
     <h2 className='font-semibold'>Category</h2>
     <button onClick={()=>setOpenUploadCategory(true)} className='text-sm border border-primary-200
      hover:bg-primary-200 px-3 py-1 rounded'>Add Category</button>
    </div>

    {
      openUploadCategory && (
        <UploadCategoryModel close={()=>setOpenUploadCategory(false)}/>
      )
    }
    
    </section>
=======
import React from 'react'

const CategoryPage = () => {
  return (
   <section>
    <div className='p-2 font-semibold bg-white shadow-md flex justify-between items-center'>
        <h2 className='font-semibold'>Category</h2>
        <button className='text-sm border border-primary-200
         hover:bg-primary-200 px-3 py-1 rounded'>Add Category</button>
    </div>
   </section>
>>>>>>> c10272d34444f5193531ec5a56c631a01c261c2e
  )
}

export default CategoryPage
