import React, { useEffect, useState } from 'react'
import { getAllListings } from '../../api/package'
import ListingsBox from '../common/ListingsBox'

function Restaurants({id}) {
    const [listingData , setListingData] = useState([])
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        const allListings = async()=>{
         try {
            const res = await getAllListings(id)
            setListingData(res.data)
            console.log(res.data);
            
         } catch (error) {
            console.log(error);
            
            
         }
        }
        allListings()

    },[])
  return (
    <div className='w-full '>
      {
        listingData.map((itm)=>(
      
            <div key={itm._id} className='flex flex-wrap mt-8 justify-center md:gap-10 sm:gap-10 gap-3 m-5 lg:gap-16 uppercase '>
            <ListingsBox className="flex-grow uppercase" id={itm._id} packageName={itm.packageId?.packageName} RestName={itm.restaurantId?.restName} startingFrom={itm.price} img={itm.restaurantId.restImage[0]} />
          </div>

        ))
      }
    </div>
  )
}

export default Restaurants
