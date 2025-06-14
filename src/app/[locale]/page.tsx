
import BestSeller from '@/components/bast-seller';
import MainHeader from '@/components/heading-title';
import Hero from '@/components/hero';
// import {getTranslations} from 'next-intl/server';

export default async function Home() {
  // const t = await getTranslations('HomePage');
  return (
    <div className="  w-full  flex flex-col justify-center items-center md:px-4">
     <Hero />
     <MainHeader title="checkout" subtitle="Our Best Seller" />
     <BestSeller />
     
    </div>
  );
}
