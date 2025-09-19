'use client'
import grid from '../assets/images/md-up.png'        
import glow from '../assets/images/glow.png'    
import mobile from '../assets/images/mb-bg.png'

const PAGE_BG = '#F0F0F1';

export default function HeroBg() {
  return (
    <>
        <div
        className="
          block md:hidden
          absolute top-0 left-1/2 -translate-x-1/2
          h-full w-screen
          -z-0 pointer-events-none
          bg-no-repeat bg-top 
        "
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(240,240,241,0) 70%, ${PAGE_BG} 100%),
            url(${mobile})
          `,
          backgroundSize: '100% 100%, 100% auto',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'top center, top center',
        }}
        aria-hidden
      />

      <div
        className="hidden md:block pointer-events-none absolute inset-0 -top-20 z-10 left-1/2 -translate-x-1/2
                   h-[520px] lg:h-[680px] xl:h-[760px] w-screen w-max-[515px]
                   bg-no-repeat bg-top bg-cover"
        style={{ backgroundImage: `url(${grid})` }}
        aria-hidden
      />
      <div
        className="hidden md:block pointer-events-none absolute inset-x-0
                   top-[340px] lg:top-[420px] z-10
                   h-[320px] lg:h-[360px]
                   bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${glow})` }}
        aria-hidden
      />
    </>
  )
}