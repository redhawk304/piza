import React from 'react'
import Link from '../link'
import { Routes } from '@/constants/enums'
import { NavBar } from './NavBar'


const Header = () => {
  return (
    <header className=' w-full   flex items-center justify-between bg-green-300'>
        <div className='container mx-auto  flex items-center justify-between py-4 border-b   '>
            <Link href={Routes.ROOT}>Home</Link>
            <NavBar/>

        </div>

    </header>
  )
}

export default Header