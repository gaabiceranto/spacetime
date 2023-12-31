import Copyright from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import Hero from '@/components/Hero'
import SignIn from '@/components/SignIn'

export default function Home() {
  return <div className="grid min-h-screen grid-cols-2">

    {/* Left */}
    <div className='relative flex flex-col items-start justify-between px-28 py-16  overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover'>

      {/* Blur */}
      <div className="absolute rigth-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2  bg-purple-700 opacity-50 rounded-full blur-full" />

      {/* Stripes */}
      <div className='absolute right-1.5 top-0 bottom-0 w-2 bg-stripes ' />

      <SignIn />

      <Hero />

      <Copyright />

    </div>

    {/* Right */}
    <div className=' flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
      <EmptyMemories />
    </div>

  </div>
}
