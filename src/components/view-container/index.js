//主视野页面
import styles from './view-container.module.scss';
import SidebarContainer from './sidebar';
import ArticleContainer from './article';
function Container() {
  return (
    <>
      <div className={styles['view-container']}>
        <ArticleContainer />
        <SidebarContainer />
      </div>
    </>
  )
}

export default Container;