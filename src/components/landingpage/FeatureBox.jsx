import React from 'react'
import { motion } from 'motion/react'

function FeatureBox({ title, para }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className='lg:w-[301px] md:w-[176px] sm:w-[140px] w-[120px] h-auto bg-[#fffafa] flex flex-col gap-2 justify-center items-center rounded-2xl shadow-xl p-3'>
      <h2 className='lg:text-[20px] md:text-[16px] sm:text-[12px] text-[10px] font-bold text-center'>{title}</h2>
      <p className='text-center text-[#606060] font-roboto lg:text-[16px] md:text-[12px] sm:text-[10px] text-[8px]'>{para}</p>
    </motion.div>
  )
}

export default FeatureBox
