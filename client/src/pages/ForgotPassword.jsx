
import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import toast from 'react-hot-toast';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';
import { useNavigate, Link } from'react-router-dom';


const ForgotPassword = () => {
    const [data, setData] = React.useState({
        email : "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const validedValue = Object.values(data).every(el => el)

    const handleSubmit = async(e) => {
        e.preventDefault();

     try {
        const response =  await Axios({
            ...SummaryApi.forgot_password,
            data : data
          })

          if(response.data.error){
            toast.error(response.data.message);
          }

          if(response.data.success){
            toast.success(response.data.message)
            setData({
                email : "",
            })
            navigate("/verification-otp")
          }
          
        
     } catch (error) {
        AxiosToastError(error)
        
     }

       

        
    }

    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7'>
                <p className='font-semibold text-lg'>Forgot password</p>


                <form className='grid gap-4 py-4' onSubmit={handleSubmit}>

                    <div className='grid gap-1'>
                        <label htmlFor='email'>Email :</label>
                        <input 
                            type='email'
                            id='email'
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                        />
                    </div>

                    <button 
                        disabled={!validedValue} 
                        className={`${validedValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"} text-white py-2 rounded font-semibold my-3 tracking-wide`}
                    >
                        Send Otp
                    </button>
                </form>

                <p>
                    Already have account? <Link to={"/login"}
                    className='font-semibold text-green-7 hover:text-green-800'>Login</Link>
                </p>
            </div>
        </section>
    )
}

export default ForgotPassword;
