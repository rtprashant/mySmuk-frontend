import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { filterListing } from '../../api/package'
import { useDispatch, useSelector } from 'react-redux';
import { errorInFilter, startFilter, successFilter } from '../../redux/feature/user/Filter';
import ListingsBox from '../common/ListingsBox';
import toast from 'react-hot-toast';

function Filter() {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: { sortBy: "" }
  })
  const { id } = useParams()
  const dispatch = useDispatch()
  const [listingData, setListingData] = useState([])
  const formSubmit = async (data) => {
    try {
      dispatch(startFilter())
      const res = await filterListing(data, id)
      console.log(res.data);
      dispatch(successFilter(res.data))
      toast.success(res.message, {
        position: "top-right",
      })
      setListingData(res.data)

    } catch (error) {
      // dispatch(errorInFilter(error.response.data.data))
      console.log(error);
      // toast.error(error.response.data.message, {
      //   position: "top-right",
      // })


    }
  }

  return (
    <div className='font-oswald '>

      <div className='lg:ml-48 md:ml-20 sm:ml-10 ml-10'>
        <form action="">
          <select name=""
            defaultValue=""
            {...register("sortBy")}
            id="sortBy" className='bg-[#D9D9D9]' onChange={(e) => {
              setValue("sortBy", e.target.value); // Manually updating state
              handleSubmit(formSubmit)(); // Submit the form
            }}>
            <option value="" >Filter</option>
            <option value="rating">Rating</option>
            <option value="priceHigh">Price (High to Low)</option>
            <option value="priceLow">Price (Low to High)</option>
          </select>
        </form>

      </div>
      
        {/* <div className=''>
          {
            listingData.map((itm) => (

              <div key={itm._id} className='w-fit flex flex-wrap mt-8 justify-center md:gap-10 sm:gap-10 gap-3 m-5 lg:gap-16 uppercase '>
                <ListingsBox className="flex-grow uppercase" id={itm._id} packageName={itm.packageId?.packageName} RestName={itm.restaurantId?.restName} startingFrom={itm.price} img={itm.restaurantId.restImage[0]} />
              </div>

            ))
          }
        </div> */}
      </div>

  )
}

export default Filter
