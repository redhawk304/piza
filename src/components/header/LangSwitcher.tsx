'use client'
import * as React from "react"

// import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from '@/i18n/navigation'
import Image from "next/image"

import { useParams } from "next/navigation"



const LangSwitcher = ({params}:{params:string}) => {

    const param = useParams()
    
    
    
    const router = useRouter()
    const pathname = usePathname()
    const switchLanguage = (locale: string) => {
        router.replace(pathname, { locale })
    }
   
   
    
    

    return (

    <li className="flex items-center space-x-4">
        {/* <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="cursor-pointer">{ param.locale==='en' ? ( <span>عربي</span> ) : (<span>English</span>) }</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-42">
        
       
        <DropdownMenuCheckboxItem
          checked={showEnglish}
          onCheckedChange={setShowEnglishLang}
          className="flex items-center gap-2 justify-between cursor-pointer"
          onClick={() => switchLanguage('en')}
        >
             <Image
            src="/flages/us.svg"
            alt="English"
            className=" cursor-pointer hover:scale-105 duration-200 transition-all  object-cover w-6 h-6 flex items-center justify-center rounded-full overflow-hidden hover:opacity-80 "
            width={32}
            height={32}
            
              />
              <span>English</span>
          
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        
        <DropdownMenuCheckboxItem
          checked={showArabic}
          onCheckedChange={setShowArabicLang}
          className="flex items-center gap-2 justify-between cursor-pointer"
          onClick={() => switchLanguage('ar')}
          
        >
           <Image
            src="/flages/sy.svg"
            alt="English"
            className=" cursor-pointer hover:scale-105 duration-200 transition-all  object-cover w-6 h-6 flex items-center justify-center rounded-full overflow-hidden hover:opacity-80 "
            width={32}
            height={32}
            
              />
              <span>عربي</span>
        </DropdownMenuCheckboxItem>

      </DropdownMenuContent>
    </DropdownMenu> */}
 
{param.locale === 'en' ? (
    
      <button  
      onClick={() => switchLanguage('ar')}
      className="w-6 h-6 flex items-center justify-center rounded-full overflow-hidden hover:opacity-80 transition-opacity"
  >
      <Image
          src="/flages/sy.svg"
          alt="Arabic"
          className=" cursor-pointer hover:scale-105 duration-200 transition-all w-full h-full object-cover"
          width={6}
          height={6}
      />
  </button>
      
    
):(

    <button   
        onClick={() => switchLanguage('en')}
        className="w-6 h-6 flex items-center justify-center rounded-full overflow-hidden hover:opacity-80 transition-opacity"
    >
        <Image
            src="/flages/us.svg"
            alt="English"
            className=" cursor-pointer hover:scale-105 duration-200 transition-all w-full h-full object-cover"
            width={6}
            height={6}
        />
    </button>
)
}
 
   
</li>
  )
}

export default LangSwitcher