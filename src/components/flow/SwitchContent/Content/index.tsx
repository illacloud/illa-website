import { FC, useEffect, useRef, useState } from "react"
import style from "./index.module.css"

const SCALE = 0.496

const Content: FC<{
  videoSrc: string
  notificationSrc: string
}> = ({ videoSrc, notificationSrc }) => {
  const ref = useRef(null)
  const [videoWidth, setVideoWidth] = useState(596)
  useEffect(() => {
    const item = ref.current
    const observer = new ResizeObserver(() => {
      const { width } = item.getBoundingClientRect()
      setVideoWidth(width * SCALE)
    })
    observer.observe(item)
    return () => {
      if (observer) {
        observer.unobserve(item)
      }
    }
  }, [])
  return (
    <div ref={ref} className="h-full w-full relative">
      <img src={notificationSrc} className={style.notificationStyle} />
      <img
        src="https://cdn.illacloud.com/illa-website/home/flow/switchBg.webp"
        width="100%"
        alt="ILLA Flow background"
      />
      <video
        style={{
          width: videoWidth,
        }}
        className={style.videoStye}
        loop
        autoPlay
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}

export default Content
