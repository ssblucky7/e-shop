import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className='h-20 shadow-md sticky top-0'>
        <div className='container mx-auto items-center h-full'>

       {/**logo */}
         <div>
            <div>
                <img
                src={logo}
                width={500}
                height={125}
                alt='logo'
                />
                  
                
            </div>
        

       {/**Search */}


       {/**login and my cart  */}
       </div>
       </div>
        </header>
  )
}

export default Header
