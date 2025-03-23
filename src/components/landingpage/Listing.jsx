import React, { useEffect, useState } from 'react'
import ListingBox from './ListingBox'
import { motion } from 'motion/react'
import { getAllPackage } from '../../api/package';
import ListingSkelton from '../skeltons/ListingSkelton';


function Listing() {
  const [listing, setListing] = useState([]);
  useEffect(() => {
    const getPackage = async () => {
      try {
        const res = await getAllPackage();
        console.log(res.data);

        setListing(res.data);
      } catch (error) {
        console.log(error);
      }

    }
    getPackage()
  }, [])
  return (
    <div className='w-full mt-10 '>
      <motion.div className='flex justify-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}>
        <h1 className='text-[#000000] font-oswald text-[60px]'> Our Listing</h1>
      </motion.div>

      <div className='flex flex-wrap mt-8 justify-center md:gap-10 sm:gap-10 gap-3 m-5 lg:gap-16 '>
        {
          listing.length > 0 ? (
            listing.map((itm, idx) => (
              <div key={idx} className='flex flex-wrap mt-8 justify-center md:gap-10 sm:gap-10 gap-3 m-5 lg:gap-16 uppercase '>
                <ListingBox className="flex-grow uppercase" packageName={itm?.packageName} startingFrom={itm?.startingFrom} id={itm?._id} img={itm?.image} />
              </div>
            ))
          ):(
            <div>
              <ListingSkelton/>
            </div>
          )
        }


      </div>

    </div>
  )
}

export default Listing
