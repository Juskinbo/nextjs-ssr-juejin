import style from './article.module.scss'
import Art from './art';
import Link from 'next/link';
import { LOCALDOMAIN } from 'utils';
import { useEffect, useState, useContext } from 'react';
import { ReducerContext } from 'utils/reducer';
function ArticleContainer() {
  const { state, dispatch } = useContext(ReducerContext);

  const artList = state.subArt;

  return (
    <>
      <div className={style['article-container']}>
        <nav className={style['article-nav']}>
          <ul>
            <li>
              <a href="#">
                <input type="radio" name="art-list" id={`art-list1`} className={style.navListCheck} defaultChecked />
                <label htmlFor="art-list1">
                  推荐
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <input type="radio" name="art-list" id={`art-list2`} className={style.navListCheck} />
                <label htmlFor="art-list2">
                  最新
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <input type="radio" name="art-list" id={`art-list3`} className={style.navListCheck} />
                <label htmlFor="art-list3">
                  热榜
                </label>
              </a>
            </li>
          </ul>
        </nav>
        <article>
          {artList.map((info, index) => {
            return (
              <Link href={`${LOCALDOMAIN}/article/${artList[index].id}`} key={index}>
                <Art info={info.attributes} artDet={artList[index]} />
              </Link>
            )
          })}
        </article>
      </div>
    </>
  )
}



export default ArticleContainer;