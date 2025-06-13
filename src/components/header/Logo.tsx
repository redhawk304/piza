import { Routes } from '@/constants/enums'

import Link from 'next/link'
import React from 'react'
type LogoLinkProps = {
   link:boolean
};

const Logo = ({link}:LogoLinkProps) => {
  return (
    link ? <Link href={Routes.ROOT} className=' text-gray-500 font-bold text-xl'> 🍕 Pizza<span className='text-xl text-red-500'>Hawk</span></Link> 
        :<div  className=' text-gray-500 font-bold text-xl cursor-pointer'>🍕 Pizza<span className='text-xl text-red-500'>Hawk</span></div>
   
  )
}

export default Logo