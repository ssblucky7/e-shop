import React from 'react'

const Dashboard = () => {
  return (
    <section classNmame = 'bg-white'> 
      <div className = 'container mx-auto- p-3 grid  lg:grid-cols=[250px,1fr]'>
       
         {/**left for menu */}
           <div className = 'py-4 sticky top-24 overflow-y-auto  hidden lg:block'>
              <userMemu/>
           </div>


         {/**left for menu */}
              <div className = 'bg-white  p-4'>
                 content display
              </div>    
       </div>
      
    </section>
  )
}

export default Dashboard
