import React, { useEffect, useRef, useState } from 'react'
import { getListingInfo } from '../../api/package';
import { useParams } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

function PackageDetails() {
    const [selected, setSelected] = useState("veg");
    const { id } = useParams()
    const [listingInfo, setListingInfo] = useState({})
    const [popup ,setPopup] = useState(false)
    const currentRef = useRef()
    useEffect(() => {
        const info = async () => {
            try {
                const res = await getListingInfo(id)
                setListingInfo(res.data)
                console.log(res.data);

            } catch (error) {
                console.log(error);


            }

        }
        info()
    }, [])

    useEffect(()=>{
        const handlePopUp = (e)=>{
            if(currentRef.current && !currentRef.current.contains(e.target)){
                setPopup(false)
            }
            
        }
        window.addEventListener("mousedown" , handlePopUp)
        return ()=>{
            window.removeEventListener("mousedown" , handlePopUp)
        }
    })

    return (
        <div className='w-full  flex  justify-center '>
            <div className='w-full md:w-[70%] bg-[#F3F3F3] rounded-xl p-4 shadow-lg flex flex-col gap-4 '>
                <div className='flex flex-col font-oswald text-wrap'>
                    <h3 className='text-[28px] '>
                        {listingInfo?.restaurantId?.restName}
                    </h3>
                    <p className=''>
                        {listingInfo?.restaurantId?.restAddress}
                    </p>
                </div>
                <div className='w-full flex sm:flex-row flex-col gap-4'>
                    <div className='w-full md:w-[70%]  flex flex-col gap-3'>
                        <div className='w-full  sm:h-96   flex lg:flex-row flex-col gap-3  '>
                            <div className='w-full lg:w-[70%] h-[350px] md:h-[600px] lg:h-96 bg-gray-300  rounded-xl'></div>
                            <div className='w-full lg:w-[30%] h-[200px] md:h-[300px] sm:h- lg:h-full b gap-2 flex flex-row lg:flex-col   '>
                                <div className='w-full h-full lg:h-[50%] bg-gray-300 rounded-xl'></div>
                                <div className='w-full h-full lg:h-[50%] bg-gray-300 rounded-xl'></div>
                            </div>
                        </div>
                        <div className="w-full h-54 flex flex-col  sm:flex-row sm:flex gap-3 ">
                            {
                                listingInfo?.meal?.map((itm) => (
                                    <div className="w-full h-54  flex  gap-3 text-[12px]">
                                        {
                                            itm.category === "veg" && (
                                                <label
                                                    className={`w-full h-full bg-white drop-shadow-lg shadow-lg rounded-xl flex flex-col  gap-2 p-4 cursor-pointer border-2 ${selected === "veg" ? "border-orange-500" : "border-transparent"
                                                        }`}
                                                    onClick={() => setSelected("veg")}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="food"
                                                        value="veg"
                                                        className="hidden"
                                                        checked={selected === "veg"}
                                                        onChange={() => setSelected("veg")}
                                                    />

                                                    <div className='flex gap-2'>
                                                        <div
                                                            className={`w-5 h-5 rounded-full border-2 ${selected === "veg" ? "border-orange-500 bg-orange-500" : "border-gray-400"
                                                                }`}
                                                        ></div>
                                                        <span className="text-lg font- -mt-1 font-oswald">Veg Meal</span>
                                                    </div>
                                                    <div className='flex flex-col gap-2 overflow-visible'>
                                                        <div className='w-full flex gap-2 font-oswald'>
                                                            <div className='w-[40%]  flex justify-center items-center'>
                                                                food
                                                            </div>
                                                            <div className='w-[60%] '>
                                                                {
                                                                    itm?.dishes?.map((i) => (
                                                                        <div key={i._id} className='flex gap-2'>
                                                                            <p>{i.quantity}x</p>
                                                                            <p>{i.name}</p>


                                                                        </div>
                                                                    ))
                                                                }


                                                            </div>
                                                        </div>
                                                        <div className='w-full flex gap-2 font-oswald'>
                                                            <div className='w-[40%]  flex justify-center items-center'>
                                                                Bevrages
                                                            </div>
                                                            <div className='w-[60%]'>
                                                                {
                                                                    itm?.beverages?.map((i) => (
                                                                        <div key={i._id} className='flex gap-2'>
                                                                            <p>{i.quantity}x</p>
                                                                            <p>{i.name}</p>


                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>

                                                    </div>
                                                </label>

                                            )
                                        }
                                        {
                                            itm.category === "non-veg" && (
                                                <label
                                                    className={`w-full h-full bg-white drop-shadow-lg shadow-lg rounded-xl flex flex-col  gap-2 p-4 cursor-pointer border-2 ${selected === "nonveg" ? "border-orange-500" : "border-transparent"
                                                        }`}
                                                    onClick={() => setSelected("nonveg")}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="food"
                                                        value="nonveg"
                                                        className="hidden"
                                                        checked={selected === "nonveg"}
                                                        onChange={() => setSelected("nonveg")}
                                                    />
                                                    <div className='flex gap-2'>
                                                        <div
                                                            className={`w-5 h-5 rounded-full border-2 ${selected === "nonveg" ? "border-orange-500 bg-orange-500" : "border-gray-400"
                                                                }`}
                                                        >

                                                        </div>
                                                        <span className="text-lg font-oswald -mt-1">Non-Veg Meal</span>
                                                    </div>
                                                    <div className='flex flex-col gap-2 overflow-visible'>
                                                        <div className='w-full flex gap-2 font-oswald'>
                                                            <div className='w-[40%]  flex justify-center items-center'>
                                                                food
                                                            </div>
                                                            <div className='w-[60%] '>
                                                                {
                                                                    itm?.dishes?.map((i) => (
                                                                        <div key={i._id} className='flex gap-2'>
                                                                            <p>{i.quantity}x</p>
                                                                            <p>{i.name}</p>


                                                                        </div>
                                                                    ))
                                                                }


                                                            </div>
                                                        </div>
                                                        <div className='w-full flex gap-2 font-oswald'>
                                                            <div className='w-[40%]  flex justify-center items-center'>
                                                                Bevrages
                                                            </div>
                                                            <div className='w-[60%]'>
                                                                {
                                                                    itm?.beverages?.map((i) => (
                                                                        <div key={i._id} className='flex gap-2'>
                                                                            <p>{i.quantity}x</p>
                                                                            <p>{i.name}</p>


                                                                        </div>
                                                                    ))
                                                                }


                                                            </div>
                                                        </div>

                                                    </div>
                                                </label>

                                            )
                                        }
                                    </div>


                                ))
                            }

                        </div>
                    </div>
                    <div className='sm:w-[40%] md:w-[30%] w-full mt-30 sm:mt-0 s self-start flex flex-col   '>
                        <div className='w-full bg-white drop-shadow-lg shadow-lg flex flex-col gap-3 rounded-xl p-3'>
                            <div>
                                <h4 className='font-oswald text-[14px] font-semibold'>Package Basic Bliss</h4>
                                <div className='pl-3'>
                                    <p className='font-oswald text-[14px] '>{
                                        listingInfo?.info?.map((itm) => (
                                            <p>{itm}</p>
                                        ))}</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-1'>
                                    <h1 className='font-oswald font-bold md:text-[20px] lg:text-[30px] '>Rs {listingInfo.price} </h1>
                                    <span className='md:mt-1 lg:mt-3 text-[12px]'>(Include all Taxes)</span>
                                </div>
                                <div className='w-full '>
                                    <button className='bg-red-500 text-white px-2 py-1 rounded-xl font-oswald hover:cursor-pointer' onClick={()=>{
                                      setPopup(true);
                                    }}>Book Now</button>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
            {
                popup && (
                    <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50 z-50'>

                    <div className="relative bg-[#ECECEC] p-5 rounded-lg w-[60%] h-[93%] sm:block hidden" ref={currentRef}>
                      <button
                        className="absolute top-4 right-4 text-[40px] font-extrabold text-red-500 bg-[#F3F3F3] shadow-gray-500 shadow-lg hover:cursor-pointer  p-2 rounded-full"
                        onClick={() => setPopup(false)}
                      >
                        <RxCross2 className='lg:size-10 md:size-8 sm:size-8 size-8 ' />
                      </button>
                      
                    </div>
          
                    
                  </div>
                )
            }
        </div>
    )
}


export default PackageDetails
