import api from "./api"

const getAllPackage = async()=>{
    const res = await api.get(`api/v1/adminRoutes/get-all-packages`)
    return res.data
}
const addPackage = async(data)=>{
    const res = await api.post(`api/v1/adminRoutes/add-package` , data)
    return res.data
}

const getAllRestaurants = async()=>{
    const res = await api.get(`api/v1/adminRoutes/get-all-restaurant`)
    return res.data
}
const addListings = async(data ,id)=>{
    const res = await api.post(`api/v1/adminRoutes/add-listing/${id}` , data)
    return res.data

}

const getAllListings = async(id)=>{
    const res = await api.get(`api/v1/adminRoutes/get-all-listings/${id}`)
    return res.data

}
const addDishes = async(data ,id)=>{
    const res = await api.post(`api/v1/adminRoutes/add-dish/${id}` , data)
    return res.data

}
const getListingInfo = async(id)=>{
    const res = await api.get(`api/v1/adminRoutes/get-lisitngInfo/${id}`)
    return res.data

}

const filterListing =  async(data ,id)=>{
    const res = await api.post(`api/v1/userRoutes/filterPackage/${id}` , data)
    return res.data

}

const bookOrder = async(data , id)=>{
    const res = await api.post(`api/v1/userRoutes/placeOrder/${id}` , data)
    return res.data
}
export{
    getAllPackage,
    addPackage,
    getAllRestaurants,
    addListings,
    getAllListings,
    addDishes,
    getListingInfo,
    filterListing,
    bookOrder
}