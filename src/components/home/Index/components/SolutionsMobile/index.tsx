import { FC } from "react"
import style from "./index.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import { MOBILE_SOLUTIONS_IMAGE } from "../../constants"
import "swiper/css"
import { Autoplay } from "swiper/modules"

const SolutionsMobile: FC = () => {
  return (
    <Swiper
      className={style.solutionContainerStyle}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
      }}
    >
      {MOBILE_SOLUTIONS_IMAGE.map((item) => (
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
