"use client";
import React from "react";

import { NavBar } from "./NavBar";
import Logo from "./Logo";

import { cn } from "@/lib/utils";
import {

} from "../ui/sheet";

const Header = () => {
  return (
    <header className=" w-full fixed lg:static  bg-background   flex items-start md:items-center justify-between">
      <div className="container mx-auto  flex  items-start md:items-center p-5 justify-between gap-3 py-4 border-b   ">
        <Logo link />
        <div
          className={cn(
            "duration-300 ease-in-out transition-all  hidden md:block"
          )}
        >
          <NavBar mobileM={true} />
        </div>

        {/* <div className='block md:hidden cursor-pointer p-4 z-10 '>
              <MenuSquare className='text-3xl' onClick={()=>setIsOpen(!isOpen)}/>
            </div> */}

        <div className="block md:hidden cursor-pointer  z-10">
          <NavBar mobileM={false} />
         
        </div>

     </div>
    </header>
  );
};

export default Header;
