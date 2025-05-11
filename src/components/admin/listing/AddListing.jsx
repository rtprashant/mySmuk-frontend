import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { addListing, packageName } from '../../../constant/admin'
import { useFieldArray, useForm } from 'react-hook-form'
import { motion } from 'motion/react';
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { LuLoaderCircle } from 'react-icons/lu'
import { packageAddFailure, packageAddStart, packageAddSuccess } from '../../../redux/feature/admin/addPackage'
import { addDishes, addListings } from '../../../api/package'

function AddListing() {
  const { id } = useParams()
  const { register, formState: { errors }, control, handleSubmit, getValues, setValue, reset, unregister } = useForm(
    {
      defaultValues: {
        dishes: [{ name: "", quantity: '' }],
        beverages: [{ name: "", quantity: '' }],
      },
    }
  )
  const { fields: dishFields, append: appendDish, remove: removeDish } = useFieldArray({
    control,
    name: "dishes",
  });


  const { fields: beverageFields, append: appendBeverage, remove: removeBeverage } = useFieldArray({
    control,
    name: "beverages",
  });


  const addDish = () => appendDish({ name: "", quantity: '' });
  const removeDishHandler = (index) => removeDish(index);

  const addBeverage = () => appendBeverage({ name: "", quantity: '' });
  const removeBeverageHandler = (index) => removeBeverage(index);
  const [addInfo, setAddInfo] = useState([])
  const [infoError, setInfoError] = useState(false);
  const { packageLoading } = useSelector(state => state.addPackage)
  const [adddishes, setaddDishes] = useState(true)
  const dispatch = useDispatch()
  // const [dishes, setDishes] = useState([{ name: "", quantity: 1 }]);
  const handleFormSubmit = async (data) => {
    if (addInfo.length < 1) {
      setInfoError(true);
      return;
    }
    const finalData = { ...data, info: addInfo };
    try {
      dispatch(packageAddStart())
      const res = await addListings(finalData, id)
      console.log(res);
      dispatch(packageAddSuccess(res.data))
      toast.success(res.message, {
        position: "top-right",
      })
      setPopUp(false)

    } catch (error) {
      dispatch(packageAddFailure(error.response.data.data))
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-right",
      })


    } finally {
      reset();
      setAddInfo([]);
      setInfoError(false);
    }
  };
  const add = () => {
    const infoValue = getValues("info")
    if (infoValue === "") return;

    setAddInfo((prevInfo) => [...prevInfo, infoValue]);
    setValue("info", "");
    setInfoError(false);
  };

  const removeListing = (id) => {
    setAddInfo((prevInfo) => prevInfo.filter((_, itmId) => itmId !== id));
  };

  const handelSlide = () => {
    setaddDishes(!adddishes)
  }

  const handleDishAdd = async(data) => {
    try {
      dispatch(packageAddStart())
      const res = await addDishes(data, id)
      console.log(res);
      dispatch(packageAddSuccess(res.data))
      toast.success(res.message, {
        position: "top-right",
      })
      setPopUp(false)

    } catch (error) {
      dispatch(packageAddFailure(error.response.data.data))
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-right",
      })


    } finally {
      reset();
    }


  }
  return (
    <div className='w-full h-screen  flex justify-center items-center'>
      {
        adddishes ? (
          <motion.div className='w-[80%]  flex justify-center '
          key={adddishes}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          >
            <div className='lg:w-[40%] md:w-[60%] sm:w-[80%] w-[90%] flex flex-col gap-5 bg-white shadow-lg rounded-xl relative p-5'>
              <div className=' text-center '>
                <p className='text-[30px] font-oswald text-center'>Add Dish</p>
              </div>
              <div className=''>
                <form action=""
                  onSubmit={handleSubmit(handleDishAdd)}
                  className='flex flex-col gap-3'>
                  <div>
                    <label htmlFor="packageName"></label>
                    <select
                      id="packageName" className='w-full h-10 flex flex-wrap rounded-lg pl-3 ring-1'
                      {...register('packageName', {
                        required: true,
                      })}>
                      <option value="" className='font-oswald'>Select Package Name</option>
                      {
                        packageName.map((itm) => (
                          <option value={itm.value} className='font-oswald' key={itm.id}>{itm.name}</option>

                        ))
                      }


                    </select>

                  </div>
                  {errors.packageName && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
                  <div className='flex gap-3 items-start'>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="category"
                        value="veg"
                        name="food"
                        className=""
                        {
                        ...register("category", {
                          required: true
                        })
                        }
                      />
                      <label htmlFor="veg" className="font-oswald">Veg</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        id="category"
                        value="non-veg"
                        name="food"
                        {
                        ...register("category", {
                          required: true
                        })
                        }
                      />
                      <label htmlFor="non-veg">Non-Veg</label>
                    </div>

                  </div>
                  {errors.category && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
                  <div className='flex flex-col gap-2 relative '>
                    <label htmlFor="name" className='font-oswald font-semibold  text-start'>Dish</label>

                    {dishFields.map((name, index) => (
                      <div key={index} className="flex gap-2 items-center relative w-full">
                        {/* Dish Name Input */}
                        <div className='flex flex-col text-wrap w-full'>
                          <input
                            type="text"
                            className="ring-1 h-10 rounded-lg pl-2 w-full"
                            placeholder="Dish name"
                            {...register(`dishes[${index}].name`, {
                              required: true
                            })}
                          />
                          {
                            errors.dishes?.[index]?.name && (
                              <span className="text-red-500 font-oswald text-[12px]">
                                * This is  Required Field
                              </span>
                            )
                          }

                        </div>


                        <div className='flex flex-col text-wrap w-full'>
                          {/* Quantity Input */}
                          <input
                            type="text"
                            min="1"
                            className="ring-1 h-10 rounded-lg pl-2 w-full "
                            placeholder="Qty"
                            {...register(`dishes[${index}].quantity`, {
                              required: true
                            })}
                          />
                          {
                            errors.dishes?.[index]?.quantity && (
                              <span className="text-red-500 font-oswald text-[12px]">
                                * This is Required Field
                              </span>
                            )
                          }

                        </div>




                        {/* Remove Button */}
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeDishHandler(index)}
                            className="text-red-500 text-xl font-bold"
                          >
                            X
                          </button>
                        )}

                      </div>


                    ))}
                    <button
                      type="button"
                      onClick={addDish}
                      className="bg-orange-500 text-white px-3 py-1 rounded-lg w-fit"
                    >
                      +
                    </button>

                  </div>
                  <div className='flex flex-col gap-2 relative '>
                    <label htmlFor="name" className='font-oswald font-semibold  text-start'>Bevrages</label>

                    {beverageFields.map((name, index) => (
                      <div key={index} className="flex gap-2 items-center relative w-full">
                        {/* Dish Name Input */}
                        <div className='flex flex-col text-wrap w-full'>
                          <input
                            type="text"
                            className="ring-1 h-10 rounded-lg pl-2 w-full"
                            placeholder="Dish name"
                            {...register(`beverages[${index}].name`)}
                          />


                        </div>


                        <div className='flex flex-col text-wrap w-full'>
                          {/* Quantity Input */}
                          <input
                            type="text"
                            min="1"
                            className="ring-1 h-10 rounded-lg pl-2 w-full "
                            placeholder="Qty"
                            {...register(`beverages[${index}].quantity`)}
                          />


                        </div>




                        {/* Remove Button */}
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => removeBeverageHandler(index)}
                            className="text-red-500 text-xl font-bold"
                          >
                            X
                          </button>
                        )}

                      </div>


                    ))}
                    <button
                      type="button"
                      onClick={addBeverage}
                      className="bg-orange-500 text-white px-3 py-1 rounded-lg w-fit"
                    >
                      +
                    </button>

                  </div>





                  {
                    packageLoading ? (
                      <div className='w-full  flex justify-center items-center font-oswald '>
                        <button
                          disabled={packageLoading}
                          className=' p-3 bg-gray-300 rounded-lg flex gap-2 font-oswald text-white cursor-pointer'>
                          <p>Adding Dishes</p>
                          <LuLoaderCircle className='animate-spin mt-1 ' />
                        </button>
                      </div>

                    ) : (
                      <div className='w-full  flex justify-center items-center font-oswald '>
                        <button className=' p-3 bg-red-500 rounded-lg font-oswald text-white cursor-pointer ' type='submit'>Add Dishes</button>
                      </div>
                    )
                  }


                </form>

              </div>
              <div className='w-full  flex justify-end gap-1 '>
                <div className='text-amber-700  font-oswald flex justify-center items-center'>All ready added a dish ?</div>
                <button className=' flex font-oswald border px-2 py-1 rounded-xl hover:bg-gray-300 hover:cursor-pointer'
                  onClick={handelSlide}>Next</button>
              </div>



            </div>



          </motion.div>
        ) : (
          <motion.div className='w-[80%]  flex justify-center '
          key={adddishes}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "circOut" }}>
            <div className='lg:w-[40%] md:w-[60%] sm:w-[80%] w-[90%] flex flex-col gap-5 bg-white shadow-lg rounded-xl relative p-5'>
              <div className=' text-center '>
                <p className='text-[30px] font-oswald text-center'>Add listing</p>
              </div>
              <div className=''>
                <form action=""
                  onSubmit={handleSubmit(handleFormSubmit)}
                  className='flex flex-col gap-3'>
                  <div>
                    <label htmlFor="packageName"></label>
                    <select
                      id="packageName" className='w-full h-10 flex flex-wrap rounded-lg pl-3 ring-1'
                      {...register('packageName', {
                        required: true,
                      })}>
                      <option value="" className='font-oswald'>Select Package Name</option>
                      {
                        packageName.map((itm) => (
                          <option value={itm.value} className='font-oswald' key={itm.id}>{itm.name}</option>

                        ))
                      }


                    </select>

                  </div>
                  {errors.packageName && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
                  <div className='flex flex-col gap-2 '>
                    <label htmlFor="price" className='font-oswald font-semibold'>Price</label>
                    <input type="number" name="" id="price"
                      className='ring-1 h-10 rounded-lg pl-2'
                      {...register('price', {
                        required: true,
                      })} />
                  </div>
                  {errors.price && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
                  <div className='flex flex-col gap-2 relative '>
                    <label htmlFor="info" className='font-oswald font-semibold  text-start'>Info</label>
                    <input type="text" name="" id="info"
                      className='ring-1 h-10 rounded-lg pl-2'
                      {...register('info')} />
                    <button
                      type="button"
                      onClick={add}
                      className='absolute text-xl w-fit flex right-0 text-end mt-9 pr-2'>
                      +
                    </button>


                  </div>
                  {infoError && (
                    <span className="text-red-500 font-oswald text-[12px]">
                      * Please add at least one info entry
                    </span>
                  )}
                  <ul className='flex  gap-2'>
                    {
                      addInfo.map((itm, idx) => (
                        <div key={idx} className=' flex border  px-4   rounded-xl relative'>
                          <div>{itm}</div>
                          <button
                            type='button'
                            onClick={() => removeListing(idx)}
                            className='absolute right-0  w-min-10 rounded-full pr-1 text-red-500 hover:cursor-pointer'>x</button>
                        </div>

                      ))
                    }
                  </ul>
                  {
                    packageLoading ? (
                      <div className='w-full  flex justify-center items-center font-oswald '>
                        <button
                          disabled={packageLoading}
                          className=' p-3 bg-gray-300 rounded-lg flex gap-2 font-oswald text-white cursor-pointer'>
                          <p>Adding Listing</p>
                          <LuLoaderCircle className='animate-spin mt-1 ' />
                        </button>
                      </div>

                    ) : (
                      <div className='w-full  flex justify-center items-center font-oswald '>
                        <button className=' p-3 bg-red-500 rounded-lg font-oswald text-white cursor-pointer'>Add Lisitng</button>
                      </div>
                    )
                  }


                </form>

              </div>
              <div className='w-full  flex justify-start gap-1 '>
                
                <button className=' flex font-oswald border px-2 py-1 rounded-xl hover:bg-gray-300 hover:cursor-pointer'
                  onClick={handelSlide}>Back to add a Dish</button>
                  <div className='text-amber-700  font-oswald flex justify-center items-center'>You can add both veg and non-veg</div>
              </div>


            </div>
           

          </motion.div>
        )
      }

    </div>
  )
}

export default AddListing
