import { FC } from "react"
import style from "./index.module.css"
import { Disclosure } from "@headlessui/react"
import ArrowIcon from "@site/static/img/public/arrow.svg"
import clsx from "clsx"
import { FAQProps } from "./interface"

const FAQ: FC<FAQProps> = ({ title, content }) => {
  const listStyle = {
    start: "transform rotate-0",
    end: "transform -rotate-180",
    activeBg: "bg-white/[0.08]",
  }

  return (
    <div className={style.faqContainer}>
      <span className={style.faqTitle}>{title}</span>
      <div className="w-full flex flex-col gap-[8px]">
        {content.map((item) => (
          <Disclosure as="div" key={item.question} className="w-full">
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={clsx(
                    style.faqListQuestion,
                    open ? `${listStyle["activeBg"]}` : ``,
                  )}
                >
                  <span>{item.question}</span>
                  <ArrowIcon
                    className={clsx(
                      open ? `${listStyle["end"]}` : `${listStyle["start"]}`,
                      style.direction,
                    )}
                  />
                </Disclosure.Button>
                {open && (
                  <Disclosure.Panel className={style.faqListAnswer}>
                    {item.answer}
                  </Disclosure.Panel>
                )}
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  )
}

export default FAQ
