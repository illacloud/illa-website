import style from "./index.module.css"
import Translate from "@docusaurus/Translate"
const AllContent = () => {
  return (
    <div className={style.allContentContainer}>
      <h2 className={style.allContentTitle}>
        <Translate id="content.all.title">
          ILLA Cloud integrates everything
        </Translate>
      </h2>
      <img
        className="w-full h-auto"
        src="https://cdn.illacloud.com/illa-website/home/all-content/all-content.webp"
        alt="ILLA Cloud integrates everything"
      />
    </div>
  )
}
export default AllContent
