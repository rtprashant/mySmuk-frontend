import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { GoPlusCircle } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { addPackage } from '../../../api/package';
import { useDispatch, useSelector } from 'react-redux';
import { packageAddStart, packageAddSuccess } from '../../../redux/feature/admin/addPackage';
import toast from 'react-hot-toast';
import { LuLoaderCircle } from 'react-icons/lu';
function AddPackage() {
  const [popUp, setPopUp] = useState(false)
  const { register, formState: { errors }, handleSubmit } = useForm()
  const { packageLoading ,
    packageError ,
    addedpackage} =useSelector(state=>state.addPackage)
  const dispatch = useDispatch()
  const handleOpenPopUp = () => {
    setPopUp(true)
  }
  const handleClosePopUp = () => {
    setPopUp(false)
  }
  const handleFormSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("packageName", data.packageName);
      formData.append("startingFrom", data.startingFrom);
      formData.append("image", data.image[0])
      dispatch(packageAddStart())
      const res = await addPackage(formData)
      console.log(res);
      dispatch(packageAddSuccess(res.data))
      toast.success(res.message, {
        position: "top-right",
      })
      setPopUp(false)

    } catch (error) {
      dispatch(packageAddFailure(error.response.data.data))
      console.log(error);
      toast.error(error.response.data.data, {
        position: "top-right",
      })


    }
  };
  return (
    <div className='w-full flex justify-center relative'>
      {
        !popUp && (
          <GoPlusCircle
            onClick={handleOpenPopUp}
            className='scale-200 hover:text-gray-800 hover:cursor-pointer' />
        )
      }

      {

        popUp && (
          <div className='absolute flex flex-col  -top-96 w-96 bg-white shadow-2xl h rounded-xl'>
            <RxCrossCircled
              onClick={handleClosePopUp}
              className='hover:text-gray-800 hover:cursor-pointer flex top-5 scale-200 right-5  absolute' />
            <div>
              <h4 className='font-bold text-wrap font-oswald flex justify-center text-[20px] mt-4'>Add Package</h4>
            </div>
            <form action=""
              className='p-4'
              onSubmit={handleSubmit(handleFormSubmit)}>
              <div className='flex flex-col gap-1'>
                <label htmlFor="packageName" className='text-wrap font-oswald'>Package Name</label>
                <input type="text"
                  id='packageName'
                  className='text-wrap font-oswald rounded-lg bg-blue-50 h-8 p-2'
                  {...register('packageName', {
                    required: true,
                  })}
                />
                {errors.packageName && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="startingFrom" className='text-wrap font-oswald'>Starting From</label>
                <input type="text"
                  id='startingFrom'
                  className='text-wrap font-oswald rounded-lg bg-blue-50 h-8 p-2'
                  {...register('startingFrom', {
                    required: true,
                  })}
                />
                {errors.startingFrom && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="image" className='text-wrap font-oswald'>Cover Image</label>
                <input type="file"
                  id='image'
                  accept="image/*"
                  className='text-wrap font-oswald rounded-lg h-8 bg-blue-50 p-2'
                  {...register('image', {
                    required: true,
                  })}
                />
                {errors.image && <span className='text-red-500 font-oswald text-[12px]'>* This field is required</span>}
              </div>
              {
                packageLoading ? (
                  <div className='flex justify-center items-center w-full '>
                  <button type='submit'
                  disabled={packageLoading}
                    className='bg-gray-300 w-[50%] p-1 mt-6 text-white font-oswald rounded-lg flex gap-2 justify-center items-center hover:cursor-pointer'>
                      <p>Creating Package</p>
                      <LuLoaderCircle className='animate-spin mt-1 ' /></button>
                </div>
                ):(
                  <div className='flex justify-center items-center w-full '>
                  <button type='submit'
                    className='bg-red-500 w-[50%] p-1 mt-6 text-white font-oswald rounded-lg hover:cursor-pointer'>Create Package</button>
                </div>

                )
              }
             
            </form>

          </div>
        )

      }

    </div>
  )
}

export default AddPackage
