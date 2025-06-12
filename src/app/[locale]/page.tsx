
import {getTranslations} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('HomePage');
  return (
    <div className="  w-full min-h-screen flex justify-center items-center px-4 py-6">
      <div className='bg-gray-50'>

      <h1>{t('title')}</h1>
      <p>{t('about')}</p>
      </div>
    </div>
  );
}
