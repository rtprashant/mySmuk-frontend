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
    <div>
      {
        listingData.map((itm)=>(
            <div key={itm._id}>
                <ListingsBox id={itm._id} packageName={itm.packageId?.packageName} RestName={itm.restaurantId?.restName} startingFrom={itm.price} img={itm.restaurantId.restImage[0]} />

            </div>

        ))
      }
    </div>
  )
}

export default Restaurants
