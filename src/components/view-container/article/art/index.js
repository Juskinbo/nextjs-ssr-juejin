import style from './art.module.scss'
import { CMSDOMAIN } from 'utils';
function Art({ info }) {
  //判断是否有封面
  const { cover } = info || {};

  //标签信息
  const labels = info.labels;

  return (
    <>
      <div className={style['art-container']}>
        {/* 作者信息&标签 */}
        <div className={style['art-author-info']}>
          {/* 作者名 */}
          <span className={style.author}>{info.author}</span>
          {/* 发布日期 */}
          <span className={style.date}>{info.date}</span>
          {/* 标签 */}
          {labels.map((item, index) => {
            return <span className={style.label} key={index}>{item}</span>
          })}
        </div>


        {/* 文章预览页面 */}
        <div className={style['art-preview']}>
          <div className={style["art-text"]}>
            {/* 标题 */}
            <h2 className={style['art-title']}>{info.title}</h2>
            {/* 预览 */}
            <p className={style['art-content']}>{info.Content}</p>
            {/* 用户交互信息 */}
            <div className={style['art-user-info']}>
              <ul>
                <li className={style.watch}>
                  <span className={style.iconfont}>&#xe661;</span>
                  {info.watch}
                </li>
                <li className={style.thumb}>
                  <span className={style.iconfont}>&#xec7f;</span>
                  {info.thumb}
                </li>
                <li className={style.comment}>
                  <span className={style.iconfont}>&#xe609;</span>
                  {info.comment}
                </li>
              </ul>
            </div>
          </div>

          {/* 文章封面页面 */}
          {(Object.keys(cover.data).length !== 0) && (
            <div className={style['art-cover']}>
              <img src={`${CMSDOMAIN}${cover.data.attributes.url}`} alt="文章封面" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Art;