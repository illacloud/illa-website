import style from "./index.module.css"
import clsx from "clsx"
import PriceTip from "@site/static/img/public/priceTip.svg"

const MobileCompare = ({ compare }) => {
  return (
    <div className={style.mobileCompareContainer}>
      <div className={style.mobileTableHeader}>
        {compare.tableHeader.map(({ label, mobileLabel }) => (
          <div key={label} className={clsx(style.mobileTableHeaderItem)}>
            {mobileLabel ?? label}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center gap-[20px]">
        {compare.items.map(({ title, isTitle, texts, isColla }, index) =>
          isTitle ? (
            <span className={style.mobileTableTitleStyle}>{title}</span>
          ) : (
            <div key={index} className={style.mobileTableContentContainer}>
              <p className={style.mobileTableItemLabelTitle}>{title}</p>
              <div className="flex flex-row w-full">
                {texts.map((text, index) => (
                  <div
                    className={clsx(
                      style.mobileTableItemSelect,
                      index !== 0 && "border-l",
                    )}
                  >
                    {(typeof text === "boolean" ||
                      (isColla && index !== 0)) && (
                      <span
                        className={clsx(
                          style.mobileTableItemLabelDesc,
                          "text-center",
                        )}
                      >
                        {text && (
                          <PriceTip className="w-[20px] text-tech-purple-03" />
                        )}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default MobileCompare
