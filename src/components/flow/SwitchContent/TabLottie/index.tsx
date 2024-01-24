import { useRef, useEffect, useCallback, FC, useState } from "react"
import lottie, { AnimationItem } from "lottie-web"
import { TAB_LOTTIE_TYPE } from "../constants"
import clsx from "clsx"
import style from "./index.module.css"

interface TabLottieProps {
  content: any
  isPlay: boolean
  lottieType: TAB_LOTTIE_TYPE
}

const TabLottie: FC<TabLottieProps> = ({ content, isPlay, lottieType }) => {
  const lottieRef = useRef(null)
  const animationRef = useRef<AnimationItem>(null)
  const [showNotification, setShowNotification] = useState(false)
  const eventRef = useRef(() => {
    setShowNotification(true)
  })
  const loadAnimation = useCallback(() => {
    animationRef.current = lottie.loadAnimation({
      container: lottieRef.current,
      animationData: content,
      renderer: "svg",
      loop: lottieType === TAB_LOTTIE_TYPE.ICON,
      autoplay: false,
      // initialSegment: [50, 150],
    })
  }, [content, lottieType])

  useEffect(() => {
    loadAnimation()
  }, [loadAnimation])

  useEffect(() => {
    let target = lottieRef.current
    const observer = new IntersectionObserver((entries) => {
      if (isPlay && entries[0].isIntersecting) {
        animationRef.current?.play?.()
      } else {
        if (animationRef.current) {
          animationRef.current.stop?.()
          setShowNotification(false)
        }
      }
    })
    if (target) {
      observer.observe(target)
    }
    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [loadAnimation, isPlay])

  useEffect(() => {
    const handleComplete = eventRef.current
    if (lottieType === TAB_LOTTIE_TYPE.CONTENT) {
      animationRef.current?.addEventListener("complete", handleComplete)
    }
    return () => {
      if (animationRef.current) {
        animationRef.current.removeEventListener("complete", handleComplete)
      }
    }
  }, [])

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
        setShowNotification(false)
        animationRef.current = null
      }
    }
  }, [])

  if (lottieType === TAB_LOTTIE_TYPE.ICON) {
    return <div ref={lottieRef} className="h-[24px] w-[24px]" />
  } else {
    return (
      <div ref={lottieRef} className="h-full w-full relative">
        <img
          src="https://cdn.illacloud.com/illa-website/test/notification.webp"
          className={clsx(
            style.notificationStyle,
            showNotification ? "opacity-100" : "opacity-0",
          )}
        />
      </div>
    )
  }
}

export default TabLottie
