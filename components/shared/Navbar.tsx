import React from 'react'
import LogoDark from '@/public/shared-img/logo-dark.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
        <div className="h-[7vh] w-full bg-white text-black mb-7">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        <div className="font-bold">
          <Image src={LogoDark} alt="surest pay" className="w-[200px]" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar