import axios from 'axios';

/**
 * creating the api
 */

const api = axios.create(
    {
        baseURL: "http://localhost:5000/api/user"   
    }
)

/**
 * sending the verification email
 */

export const sendRegisterVerificationCodeByEmail = async(data)=>{

    const res = await api.post("/registration/verificationCode",JSON.stringify(data),{
        headers:{
            "Content-Type": "application/json"
        }
    });

    console.log("Inside the register Email verification Api",res.data);
    const {code,email,message,status} = res.data;
    return {
        code,
        email,
        message,
        status
    };    
}