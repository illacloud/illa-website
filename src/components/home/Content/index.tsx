import style from "./index.module.css"
import AllContent from "./AllContent"
import CardContent from "./CardContent"
import CommBottom from "@site/src/components/common/CommBottom"
import LogoWall from "@site/src/components/home/Content/LogoWall"
import Comments from "./Comments"
import FAQ from "../../common/FAQ"
import { FAQ_CONTENT } from "@site/src/config/Home"

const NewContent = () => {
  return (
    <div className={style.contentContainer}>
      <div className={style.content}>
        <LogoWall />
        <CardContent />
        <Comments />
        <AllContent />
        <FAQ title={FAQ_CONTENT.title} content={FAQ_CONTENT.content} />
      </div>
      <div className={style.commBottomContainerStyle}>
        <CommBottom scrollStart={0.9368} scrollEnd={1} />
      </div>
    </div>
  )
}

export default NewContent
