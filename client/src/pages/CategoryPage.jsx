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
  )
}

export default CategoryPage
