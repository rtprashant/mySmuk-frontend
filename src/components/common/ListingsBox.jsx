
import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

function ListingsBox({id , RestName , packageName , startingFrom , img}) {
    const navigate = useNavigate()
    const handleClick = (pid)=>{
        navigate(`/book-now/${pid}`)
        console.log(pid);
        
    }
    return (
        <motion.div className='w-[98%] sm:w-[409px] h-full rounded-xl  relative '
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}>

            <div className='relative'>
                <img
                    src={img}
                    alt=""
                    className={`h-[209px] w-full rounded-xl bg-gray-300 ${img? "":"animate-pulse"} object-cover`}
                />

                <div className='h-[39px] w-full -mt-4 absolute bg-black flex justify-center items-center'>
                    <h2 className='text-white font-outfit font-bold text-[20px] flex justify-center items-center'>{RestName}</h2>
                </div>
            </div>


            <div className='bg-[#FF5151] mt-5 px-3 rounded-b-xl'>
            <div className='uppercase font-oswald font-bold'>
                        {packageName}
                    </div>
                <div className='flex  justify-between mt-5'>
                    
                    <div className='flex flex-col'>
                        <h3 className='font-outfit font-semibold'>Starting From :</h3>
                        <h1 className='font-outfit font-semibold text-[40px]'> Rs {startingFrom}</h1>
                    </div>
                    <div>
                        <button
                        onClick={()=>handleClick(id)}
                         className='bg-black  hover:cursor-pointer w-[107.12px] h-[43px] rounded-xl text-white mt-4'>Book Now</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ListingsBox;
