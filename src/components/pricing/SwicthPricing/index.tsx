import { FC } from "react"
import style from "./index.module.css"
import clsx from "clsx"

interface SwitchPricingProps {
  isActive: boolean
  setSwitchState: () => void
}
const SwitchPricing: FC<SwitchPricingProps> = ({
  isActive,
  setSwitchState,
}) => {
  return (
    <div
      className={clsx(
        style.switchContainer,
        isActive ? "bg-[#8CFFAC]/[0.2]" : "bg-white/[0.2]",
      )}
      onClick={setSwitchState}
    >
      <div
        className={clsx(style.switchDot, isActive ? style.activeSwitchDot : "")}
      />
    </div>
  )
}

export default SwitchPricing
