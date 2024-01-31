import style from "./index.module.css"
import clsx from "clsx"
import PriceTip from "@site/static/img/public/priceTip.svg"

const MobileCompare = ({ compare }) => {
  return (
    <div className={style.mobileCompareContainer}>
      <div className={style.mobileTableHeader}>
        {compare.tableHeader.map(({ label }) => (
          <div key={label} className={clsx(style.mobileTableHeaderItem)}>
            {label}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center gap-[20px]">
        {compare.items.map(({ title, isTitle, texts, icons }, index) =>
          isTitle ? (
            <span className={style.mobileTableTitleStyle}>{title}</span>
          ) : (
            <div key={index} className={style.mobileTableContentContainer}>
              <p className={style.mobileTableItemLabelTitle}>{title}</p>
              <div className="flex flex-row w-full">
                {icons
                  ? icons.map((icon, index) => (
                      <div
                        className={clsx(
                          style.mobileTableItemSelect,
                          index !== 0 && "border-l",
                        )}
                      >
                        {icon && (
                          <PriceTip className="w-[20px] text-tech-purple-03" />
                        )}
                      </div>
                    ))
                  : texts.map((text, index) => (
                      <div
                        className={clsx(
                          style.mobileTableItemSelect,
                          index !== 0 && "border-l",
                        )}
                      >
                        <span
                          className={clsx(
                            style.mobileTableItemLabelDesc,
                            "text-center",
                          )}
                        >
                          {text}
                        </span>
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
