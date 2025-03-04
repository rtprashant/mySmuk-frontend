
import React from 'react';
import { motion } from 'motion/react';

function ListingBox() {
    return (
        <motion.div className='w-[409px] h-[354px] rounded-xl bg-gray-500 relative '
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}>

            <div className='relative'>
                <img
                    src=""
                    alt=""
                    className='h-[209px] w-full rounded-xl'
                />

                <div className='h-[39px] w-full -mt-4 absolute bg-black flex justify-center items-center'>
                    <h2 className='text-white font-outfit font-bold text-[20px]'>Barbeque Nation</h2>
                </div>
            </div>


            <div className='bg-white mt-5 px-3 rounded-b-xl'>
                <div className='flex justify-between'>
                    <h3 className='font-outfit text-[14px] font-medium'>Greater Kalash Delhi</h3>
                    <h3 className='font-outfit text-[14px] font-medium'>1.5 Km Away</h3>
                </div>
                <div className='flex justify-between mt-5'>
                    <div className='flex flex-col'>
                        <h3 className='font-outfit font-semibold'>Starting From :</h3>
                        <h1 className='font-outfit font-semibold text-[40px]'> Rs 2500</h1>
                    </div>
                    <div>
                        <button className='bg-[#f41313] hover:cursor-pointer w-[107.12px] h-[43px] rounded-xl text-white mt-4'>Book Now</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ListingBox;
