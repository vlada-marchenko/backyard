import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { useRef, useState } from "react"
import Icon from "./Icon"
import "swiper/css"
import "swiper/css/pagination"
import firstMp4 from '../assets/videos/first.mp4'
import secondMp4 from '../assets/videos/second.mp4'
import thirdMp4 from '../assets/videos/third.mp4'

import firstPoster from '../assets/images/first.png'
import secondPoster from '../assets/images/second.png'
import thirdPoster from '../assets/images/third.png'

const slides = [
  {
    id: 1,
    badge: '1',
    title: "Yield Aggregator",
    subtitle: "One-click yield aggregation",
    text: "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
    video: firstMp4,
    poster: firstPoster
  },
  {
    id: 2,
    badge: '2',
    title: "Yield-backed Stablecoin",
    subtitle: "Unlock liquidity with BYD",
    text: "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
    video: secondMp4,
    poster: secondPoster
  },
  {
    id: 3,
    badge: '3',
    title: "Boost DeFi Liquidity",
    subtitle: "Boost protocols, earn more",
    text: "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.",
    video: thirdMp4,
    poster: thirdPoster
  }
]

function Slide({ card }) {
  return (
    <div className="flex flex-col items-center gap-[18px] md:grid md:grid-cols-2 md:gap-x-[40px] md:gap-y-[20px] md:mt-0 lg:flex lg:flex-col lg:items-center lg:justify-between">

      <div className="relative z-0 md:order-2 lg:order-0 md:items-center">
<video
  src={card.video}
  autoPlay
  muted
  loop
  preload="auto"
  playsInline
  poster={card.poster}
  className="w-[179px] h-[179px] md:w-[245px] md:h-[245px] md:-mt-6 lg:-mt-[21px] lg:w-[179px] lg:h-[179px] object-cover rounded-lg justify-self-end "
/>
      </div>

      <div className="relative z-10 -mt-10 md:mt-0 lg:-mt-10">
        {/* Badge + Title */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-[10px] w-[310px]  md:w-[388px] lg:w-[310px] h-[57px] bg-[#F4F6F7] backdrop-blur-[2px] rounded-[45px]">
          <span className="flex items-center justify-center w-[33px] h-[33px] bg-[#2D322F] backdrop-blur-[7.88px] rounded-full font-[Archivo] font-semibold text-[15.4px] leading-[140%] tracking-[0.02em] text-[#FBFBFC] ml-[13px]">
            {card.badge}
          </span>
          <span className="font-[Gilroy-SemiBold] font-normal text-[20px] leading-[25px] text-[#303030] ">
            {card.title}
          </span>
        </div>

        {/* Subtitle + Description */}
        <div className="w-[310px] md:w-[388px] lg:w-[310px] h-[141px] bg-[#F4F6F7] backdrop-blur-[2px] rounded-[31px] py-[30px] px-[32px] flex flex-col md:items-start mt-[15px]">
          <h3 className="font-[Archivo] font-extrabold text-[18px] leading-[20px] text-[#2D322F]">
            {card.subtitle}
          </h3>
          <p className="font-[Gilroy-Medium] font-normal text-[14px] leading-[17px] text-[#787878] mt-[11px] md:w-[256px]">
            {card.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Backyard() {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="about" className="mt-[67px] flex flex-col relative">

      <h2 className="font-[Archivo] font-bold text-[28px] leading-[110%] text-[#303030] md:mb-[20px] lg:mb-0 lg:md-0 absolute z-50 pointer-events-none md:static md:z-auto">
        What is Backyard?
      </h2>

      {/* Mobile + Tablet */}
      <div className="lg:hidden w-full mt-[7px]">
        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          pagination={false}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-2xl"
        >
          {slides.map((card) => (
            <SwiperSlide key={card.id}>
              <Slide card={card} />
            </SwiperSlide>
          ))}
        </Swiper>

          <div className="mt-4 flex justify-start gap-1 ml-[31px]">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => swiperRef.current?.slideTo(i)}
              className="w-[28px] h-[4px] inline-flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-black/70"
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === activeIndex ? (
                <Icon name="bar-active" className="w-full h-full" />
              ) : (
                <Icon name="bar-inactive" className="w-full h-full" />
              )}
            </button>
          ))}
        </div>
      </div>



      {/* Desktop */}
      <div className="hidden lg:flex w-full justify-center lg:mt-[20px]">
        <div className="grid grid-cols-[auto_auto_auto] justify-between w-full">
          {slides.map((card) => (
            <Slide key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}