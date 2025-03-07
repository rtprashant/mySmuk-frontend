import api from "./api"

const userResgistration = async(data)=>{
    const res = await api.post(`api/v1/userRoutes/userRegister` , data)
    return res.data
}
export {
    userResgistration
}