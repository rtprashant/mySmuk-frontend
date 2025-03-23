import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { addListing, packageName } from '../../../constant/admin'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { LuLoaderCircle } from 'react-icons/lu'
import { packageAddFailure, packageAddStart, packageAddSuccess } from '../../../redux/feature/admin/addPackage'
import { addListings } from '../../../api/package'

function AddListing() {
  const { id } = useParams()
  const { register, formState: { errors }, handleSubmit, getValues, setValue, reset } = useForm()
  const [addInfo, setAddInfo] = useState([])
  const [infoError, setInfoError] = useState(false);
  const { packageLoading } = useSelector(state => state.addPackage)
  const dispatch = useDispatch()
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

  const remove = (id) => {
    setAddInfo((prevInfo) => prevInfo.filter((_, itmId) => itmId !== id));
  };
  return (
    <div className='w-full h-screen  flex justify-center items-center'>
      <div className='w-[80%]  flex justify-center '>
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
                        onClick={() => remove(idx)}
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


        </div>

      </div>

    </div>
  )
}

export default AddListing
