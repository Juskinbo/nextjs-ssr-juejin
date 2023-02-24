import style from './article.module.scss';
import { LOCALDOMAIN } from 'utils';
import Showdown from 'showdown';
function Article({ artInfo }) {
  const { attributes } = artInfo
  const { Content, author, comment, thumb, title, watch } = attributes;
  //markDown 插件
  const converter = new Showdown.Converter();
  return (
    <>
      <main className={style['article-container']}>
        {/* 点赞信息等 */}
        <aside className={style['article-info']}>
          <ul>
            <li className={style.iconfont}>&#xec7f;<span className={style['article-thumb']}>{thumb}</span></li>
            <li className={style.iconfont}>&#xe609;<span className={style['article-comment']}>{comment}</span></li>
            <li className={style.iconfont}>&#xe666;</li>
            <li className={style.iconfont}>&#xe63d;</li>
            <li className={style.iconfont}>&#xe600;</li>
            <li className={style.iconfont}>&#xec13;</li>
          </ul>
        </aside>
        {/* 文章主页面 */}
        <article className={style['article-main']}>
          <h1 className={style['article-title']}>{title}</h1>
          <div className={style['article-author']}>
            <div className={style['article-author-avatar']}>
              <div className={style.img}></div>
            </div>
            <div className={style['article-author-info']}>
              <span className={style['article-author-name']}>{author}</span>
              <span>访问量:{watch}</span>
            </div>
          </div>
          {/* 支持markdown语法 */}
          <div className={style['article-content']} dangerouslySetInnerHTML={{ __html: converter.makeHtml(Content) }}></div>
        </article>
        {/* 侧边栏信息 */}
        <aside className={style['article-sidebar']}>
          <div className={style['article-cont']}>
            <div className={style['article-author']}>
              {/* 头像 */}
              <div className={style['article-author-avatar']}>
                <div className={style.img}></div>
              </div>
              {/* 描述 */}
              <div className={style['article-author-info']}>
                <span className={style['article-author-name']}>{author}</span>
                <span>前端开发</span>
              </div>
            </div>
            <div className={style['article-button']}>
              <button className={style['follow']}>关注</button>
              <button className={style['message']}>私信</button>
            </div>
            <ul>
              <li>
                <span className={style.iconfont}>&#xec7f;</span>
                <span>获得点赞</span>
                <span>{thumb}</span>
              </li>
              <li>
                <span className={style.iconfont}>&#xe661;</span>
                <span>文章被阅读</span>
                <span>{watch}</span>
              </li>
            </ul>
          </div>

        </aside>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const { articleId } = context.query;
  const res = await fetch(`${LOCALDOMAIN}/api/artinfo/?articleId=${articleId}`)
    .then(data => data.json());
  return {
    props: {
      artInfo: res.data
    }
  }
}
export default Article;