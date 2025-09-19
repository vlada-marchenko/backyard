'use client'

import Icon from "./Icon"

export default function Hero() {
    return (
        <section id="hero" className="md:mt-[28px]">
            <div className="flex flex-row items-start justify-between">
              <div className="w-[316px] md:w-[498px] lg:w-[740px]" >
               <h2 className="font-[Archivo] font-semibold not-italic text-[58px] leading-[110%] text-[#303030]  md:font-semibold md:text-[48px] md:leading-[110%] lg:font-semibold lg:text-[72px] lg:leading-[110%] xl:font-semibold xl:text-[90px] xl:leading-[110%] xl:w-[1027px]">The yield-backed stablecoin protocol boosting <br className="md:hidden"/>
                <span className="inline-flex items-center gap-2">DeFi 
                <Icon name="complex-icon" className="w-[60px] h-[60px] md:hidden"/></span> liquidity</h2>
                <p className="font-sans font-normal text-[20px] leading-[25px] flex items-center text-[rgba(38,38,38,0.55)] mt-[14px] md:font-normal md:text-[16px] md:leading-[20px] md:mt-[16px] lg:font-normal lg:text-[20px] lg:leading-[25px] xl:font-normal xl:text-[24px] xl:leading-[29px]">Keep your yield working for you — we keep your liquidity accessible</p>
              </div>
              <div className="hidden md:block ">
                <Icon name="complex-icon" className="w-[152px] h-[152px] mt-[20px] lg:w-[212px] lg:h-[212px] lg:mr-[60px] lg:mt-[25px] xl:mr-[10px] xl:w-[276px] xl:h-[276px]"/>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 mt-[38px] md:gap-[21px] md:mt-[34px]  lg:mt-[70px] xl:mt-[79px]">
                <button className="flex flex-row justify-center items-center px-0 py-4 gap-[10px] w-[164px] h-[57px] bg-[#2D2D2D] backdrop-blur-[2px] rounded-[38px] font-archivo font-semibold text-[16px] leading-[140%] tracking-[0.02em] text-[#F7F7F7] hover:bg-[#3B3B3B] hover:backdrop-blur-[2px] active:bg-[#2D2D2D] active:backdrop-blur-[2px] md:w-[329px] md:h-[57px]">Join Whitelist</button>
                <button className="flex flex-row justify-center items-center px-0 py-4 gap-[10px] w-[144px] h-[57px] bg-[#E6E8EC] backdrop-blur-[2px] rounded-[38px] font-archivo font-semibold text-[16px] leading-[140%] tracking-[0.02em] text-[#2E2E2E] hover:bg-[#F8FBFF] hover:backdrop-blur-[2px] active:bg-[#ABACAF] active:backdrop-blur-[2px] md:hidden">Learn more
                    <Icon name="arrow-right" className='w-[10px] h-[10px]'/>
                </button>
                <button className="hidden md:flex flex-row justify-center items-center px-0 py-4 gap-[10px] w-[144px] h-[57px] bg-[#E6E8EC] backdrop-blur-[2px] rounded-[38px] font-archivo font-semibold text-[16px] leading-[140%] tracking-[0.02em] text-[#2E2E2E] hover:bg-[#F8FBFF] hover:backdrop-blur-[2px] active:bg-[#ABACAF] active:backdrop-blur-[2px] md:w-[208px]">Read Docs</button>
            </div>
        </section>
    )
}

