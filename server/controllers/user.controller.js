import { response } from 'express'
import UserModel from '../models/user.model.js'
import bcryptjs from 'bcryptjs'


export async function registerUserController(request,response) {
    try {
        console.log('Request Body:', request.body)
        const{ name, email, password } = request.body
        if (!name|| !email || !password){
            return response.status(400).json({
                message:"provide email,name,password",
                error:true,
                success:false
            })
        }
        const user = await UserModel.findOne({email})
        
        if(user){
            return response.json({
                message:"Already register email",
                error:true,
                success:false
            })
        }
        const salt=await bcryptjs.genSalt(10)
        const hashpassword=await bcryptjs.hash(password,salt)
        const payload={
            name,
            email,
            password:hashpassword
        }
        const newUser= new UserModel(payload)
        const save= await newUser.save()

        // const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`

        // const VerifyEmail = await sendEmail({
        //     sendTo:email,
        //     subject:"Account Verification Email from DurableDress",
        //     html:verifyEmailTemplate({
        //         name,
        //         url : VerifyEmailUrl
        //     })
        // })

        return response.json({
            message:"User register successfully",
            error:false,
            success:true,
            data : save
        })

    }
    catch(error){
        return response.status(500).json({
            message:error.message||error,
            error:true,
            success:false
        })
    }
    
    
}