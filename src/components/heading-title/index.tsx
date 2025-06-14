'use client'

const MainHeader = ({title, subtitle}:{title:string, subtitle:string}) => {
  return (
    <>
    <span className='uppercase text-gray-500 font-semibold py-2 leading-4'>
        {subtitle}
    </span>
    <h1 className='text-5xl text-red-500 font-bold leading-10 italic'>
        {title}
    </h1>

    </>
  )
}

export default MainHeader