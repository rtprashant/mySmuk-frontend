import React from 'react'
import { adminWork } from '../../constant/admin'
import { NavLink } from 'react-router-dom'

function AdminWorks() {
  return (
    <div className='w-full flex  gap-5  justify-center items-center relative flex-wrap'>
        {
            adminWork.map((itm)=>(
                <NavLink 
                to={itm.to}
                key={itm.id} className='flex border font-oswald hover:cursor-pointer hover:bg-gray-100 rounded-full w-96 h-10 justify-center items-center flex-wrap'>
                    {itm.name}

                </NavLink>

            ))
        }
      
    </div>
  )
}

export default AdminWorks
