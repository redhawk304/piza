import { getTranslations } from 'next-intl/server';
import React from 'react'

const  AboutPage = async () => {
    const t = await getTranslations('HomePage');

  return (
    <div>
        <h1>
            {t('about')}
        </h1>
    </div>
  )
}

export default AboutPage