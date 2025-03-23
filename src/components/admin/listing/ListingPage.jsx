import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { addListing, searchBar } from '../../../constant/admin'
import { FaSearch } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx"
import { getAllRestaurants } from '../../../api/package';
import { LuLoaderCircle } from 'react-icons/lu';

function ListingPage() {
    const [rest, setRest] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const Restaurant = async () => {
            try {
                setLoading(true);
                const res = await getAllRestaurants()
                setRest(res.data)
                setLoading(false)
                console.log(res.data);

            } catch (error) {
                console.log(error);
                setLoading(false)
            }

        }
        Restaurant();

    }, [])

    const handleNavigation = (id)=>{
        navigate(`${id}`)

    }
    return (
        <div>

            <div className='w-full  flex   gap- justify-center  relative flex-wrap mt-10'>
                <input type="text"
                    placeholder={searchBar.placeHolder}
                    // onChange={handleChange}
                    // value={search}
                    className=' w-[80%] h-16 p-5 bg-blue-50 text-black font-oswald rounded-full outline-none border-none focus:ring-0 focus:border-transparent' />

                <button className=' text-[30px] ml-1'>
                    <FaSearch />
                </button>

            </div>
            <div className='w-full flex justify-center mt-10 font-oswald font-bold text-[34px]'>
                <h3>All Restaurants</h3>
            </div>
            {
                loading ? (
                    <div className='w-full flex justify-center items-center'>
                        <LuLoaderCircle className='animate-spin mt-1 text-gray-500 text-[50px]' />

                    </div>

                ) : (
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-[80%] flex gap-2'>
                            <div className='flex gap-5 w-full flex-wrap justify-center items-center'>
                                {
                                    rest.map((r) => (
                                        <div key={r._id} 
                                        onClick={() => handleNavigation(r._id)}
                                        className='w-[30%] flex-grow flex justify-center items-center text-center border p-5 rounded-xl hover:cursor-pointer'>
                                            {r.restName}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default ListingPage
