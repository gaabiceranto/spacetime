import Image from 'next/image'

export default function Home() {
  return <div className="grid min-h-screen grid-cols-2">
    
    {/* Left */}
    <div className='relative flex flex-col items-start justify-between px-28 py-16  overflow-hidden'>
      {/* Blur */}
      <div className="absolute rigth-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2  bg-purple-700 opacity-50 rounded-full blur-full"></div>
      {/* Stripes */}
      <div className='absolute right-1.5 top-0 bottom-0 w-2 bg-stripes'></div>
    </div>

    {/* Right */}
    <div className=' flex flex-col p-16'>
      <div className='flex flex-1 items-center justify-center'>
        <p className='text-center leading-relaxed w-[360px]'>Você ainda não registrou nenhuma lembrança, comece a{' '} <a href="#" className='underline hover:text-gray-50'>criar agora!</a></p>
      </div>
    </div>

  </div>
}
