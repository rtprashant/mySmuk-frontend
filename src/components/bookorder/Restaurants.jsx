import React, { useEffect, useState } from 'react'
import { getAllListings } from '../../api/package'
import ListingsBox from '../common/ListingsBox'
import { useSelector } from 'react-redux'

function Restaurants({id}) {
    const [listingData , setListingData] = useState([])
    const [loading , setLoading] = useState(false)
    const { filterData } = useSelector((state) => state.filter);
    useEffect(()=>{
        const allListings = async()=>{
         try {
            const res = await getAllListings(id)
            filterData? setListingData(filterData):setListingData(res.data)
            console.log(res.data);
            
         } catch (error) {
            console.log(error);
            
            
         }
        }
        allListings()

    },[filterData])
  return (
    // <div className='w-full'>
    <div className='flex flex-wrap justify-evenly'>
      {
        listingData.map((itm)=>(
      
            <div key={itm._id} className='w-fit flex flex-wrap mt-8 justify-center md:gap-10 sm:gap-10 gap-3 m-5 lg:gap-16 uppercase '>
            <ListingsBox className="flex-grow uppercase" id={itm._id} packageName={itm.packageId?.packageName} RestName={itm.restaurantId?.restName} startingFrom={itm.price} img={itm.restaurantId.restImage[0]} />
          </div>

        ))
      }
    </div>
    // </div>
  )
}

export default Restaurants
