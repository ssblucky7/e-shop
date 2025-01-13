import React, { useState, useEffect } from "react"

const useMobile = (breakpoint = 768)=>{
    const [ismobile,setmobile] = useState(window.innerWidth < breakpoint)

    const handleResize = () => {
        const checkpoint = window.innerWidth < breakpoint
        setmobile(checkpoint)
    }

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize)

        return () =>{
             window.removeEventListener('resize', handleResize)  
         }
    },[] )

    return [ ismobile ]
}

export default useMobile