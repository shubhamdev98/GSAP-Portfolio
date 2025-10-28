import React from 'react'
import star from '../assets/asterisk_18879846.png'

const Marquee: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden bg-white text-black pb-28 lg:pb-44">
        {/* Row 1 */}
        <div className="whitespace-nowrap animate-marquee text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            CREATE{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-10 md:h-14 lg:h-16 xl:h-22" />
            DESIGN{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-10 md:h-14 lg:h-16 xl:h-22" />
            INSPIRE{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-10 md:h-14 lg:h-16 xl:h-22" />
            CREATE{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-10 md:h-14 lg:h-16 xl:h-22" />
            DESIGN{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-10 md:h-14 lg:h-16 xl:h-22" />
            INSPIRE{' '}
            <img src={star} alt="" className="marquee-star1 h-8 sm:h-10 md:h-14 lg:h-16 xl:h-22" />
          </span>
        </div>

        {/* Row 2 (reverse) */}
        <div className="whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            CREATE{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-14 md:h-14 lg:h-16 xl:h-22" />
            DESIGN{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-14 md:h-14 lg:h-16 xl:h-22" />
            INSPIRE{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-14 md:h-14 lg:h-16 xl:h-22" />
            CREATE{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-14 md:h-14 lg:h-16 xl:h-22" />
            DESIGN{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-14 md:h-14 lg:h-16 xl:h-22" />
            INSPIRE{' '}
            <img src={star} alt="" className="marquee-star1 h-14 sm:h-14 md:h-14 lg:h-16 xl:h-22" />
          </span>
        </div>
      </div>
    </>
  )
}

export default Marquee
