import style from "./index.module.css"
import Translate from "@docusaurus/Translate"
import AllConstantIcon from "@site/static/img/home3/allContant/allContant.svg"
const AllContent = () => {
  return (
    <div className={style.allContentContainer}>
      <h1 className={style.allContentTitle}>
        <Translate id="content.all.title">
          ILLA Cloud integrates everything
        </Translate>
      </h1>
      <AllConstantIcon className="w-full h-auto" />
    </div>
  )
}
export default AllContent
