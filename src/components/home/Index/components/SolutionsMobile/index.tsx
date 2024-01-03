import { FC } from "react"
import style from "./index.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { MOBILE_SOLUTIONS } from "../../constants"
import "swiper/css"
import { Autoplay } from "swiper/modules"

const SolutionsMobile: FC = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      centeredSlides
      slidesPerView="auto"
      spaceBetween={0}
      className="w-full"
      autoplay={{
        delay: 3000,
      }}
    >
      {MOBILE_SOLUTIONS.map((item) => (
        <SwiperSlide key={item.label}>
          <div className={style.contentContainerStyle}>
            {item.content}
            <span className={style.contentLabelStyle}>{item.label}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SolutionsMobile
