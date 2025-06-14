
import Hero from '@/components/hero';
import {getTranslations} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('HomePage');
  return (
    <div className="  w-full  flex justify-center items-start md:px-4">
     <Hero />
     <div className='h-[10000px]'>
      goo

     </div>
    </div>
  );
}
