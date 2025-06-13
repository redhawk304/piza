import { Pages, Routes } from "@/constants/enums";
import React from "react";
import Link from "../link";
import LangSwitcher from "./LangSwitcher";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuSquare } from "lucide-react";
import Logo from "./Logo";

type MobileProps = {
  mobileM: boolean;
};

export const NavBar = ({ mobileM }: MobileProps) => {
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
    },
  ];

  return mobileM ? (
    <nav className="flex-1 justify-end flex items-center  ">
      <ul className="flex md:flex-row items-center flex-col justify-between gap-2 transition-all duration-200 ease-in-out">
        {Links.map((link, index) => (
          <li key={index} className="text-gray-500 space-x-2">
            <Link
              href={link.path}
              className="text-sm hover:text-red-500 duration-200 font-medium"
            >
              {link.label}
            </Link>
          </li>
        ))}
     
       

       
          <LangSwitcher params="en" /> 
       
      </ul>
    </nav>
  ) : (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <MenuSquare className="text-3xl cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left" className=" flex items-start justify-between">
          <SheetHeader>
            <SheetTitle>
            <SheetClose asChild>
              <Link href={"/"}>
                <Logo link={false} />
              </Link>
            </SheetClose>
            </SheetTitle>

            <nav className="flex-1 justify-end flex items-center  ">
              <ul className="flex md:flex-row items-center flex-col justify-between gap-2 transition-all duration-200 ease-in-out">
                {Links.map((link, index) => (
                  <li key={index} className="text-gray-500 space-x-2">
                    <SheetClose asChild>
                      <Link
                        href={link.path}
                        className="text-sm hover:text-red-500 duration-200 font-medium"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              
                
                  <LangSwitcher params="en" />
              
              </ul>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
