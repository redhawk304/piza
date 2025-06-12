import { Pages, Routes } from '@/constants/enums'
import React from 'react'
import Link from '../link'
import LangSwitcher from './LangSwitcher'


export const NavBar = () => {

    
    const Links = [
        {
            label: "Menu",
            path: Routes.MENU,
        },
        {
            label: "About",
            path: Routes.ABOUT,
        },
        {
            label: "Contact",
            path: Routes.CONTACT,
        },  
        {
            label: "Login",
            path: `${Routes.AUTH}/${Pages.LOGIN}`,
        }
    ]

   

    return (
        <nav className='flex-1 justify-end flex items-center  '>
            <ul className='flex items-center justify-between gap-2'>
                {Links.map((link,index) => {
                    return (
                        <li key={index}>
                            <Link href={link.path} className='text-sm font-medium'>{link.label}</Link>
                        </li>
                    )
                })}

                <LangSwitcher params="en" />
                
            </ul>
        </nav>
    )
}
