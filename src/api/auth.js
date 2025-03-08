import api from "./api"

const userResgistration = async(data)=>{
    const res = await api.post(`api/v1/userRoutes/userRegister` , data)
    return res.data
}
const verifyOtp = async(otp, userId)=>{
    const res = await api.post(`api/v1/userRoutes/verifyOtp/${userId}` , otp)
    return res.data
}
const userLogin = async(data)=>{
    const res = await api.post(`api/v1/userRoutes/userLogin` , data)
    return res.data
}
export {
    userResgistration,
    verifyOtp,
    userLogin
}