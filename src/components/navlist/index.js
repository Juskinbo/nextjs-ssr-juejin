import style from './navlist.module.scss';
import { ReducerContext } from 'utils/reducer';
import { useContext, useEffect, useState } from 'react';
import { FILTER, RESET } from 'utils/action';
function NavList() {

  const { state, dispatch } = useContext(ReducerContext);
  const { labels } = state || {};

  const subnavs = labels.data || [];

  const [nav, setNav] = useState([]);
  const [manage, setManage] = useState(false);

  //本地是否有用户自定义的标签信息？
  //or 后台配置subNav
  useEffect(() => {
    const checkNav = () => {
      const subnav = JSON.parse(localStorage.getItem('subnav')) || subnavs;
      setNav(subnav);
    }
    checkNav();
    window.addEventListener('storage', checkNav);
    return () => {
      window.removeEventListener('storage', checkNav);
    }


  }, [])

  //标签管理功能
  const tagManagement = id => {
    let tempNav;
    if (id === 0) {
      tempNav = subnavs;
    }
    else {
      tempNav = nav.filter(item => item.id !== id);
    }
    localStorage.setItem('subnav', JSON.stringify(tempNav));
    setNav(tempNav);
  }


  return (
    <>
      <div className={style['navlist-container']}>
        <ul className={style.list}>
          <li>
            <a href='#' onClick={() => dispatch({ type: RESET })}>
              <input type="radio" name="nav-list" id={`navList0`} className={style.navListCheck} defaultChecked />
              <label htmlFor={`navList0`}>
                综合
              </label>
            </a>
          </li>
          {nav.map((item, index) => {
            const { id, attributes } = item;
            const { name } = attributes;
            return (
              <li key={id}>
                {/* onClick={() => dispatch({ type: FILTER, payload: name })} */}
                <a href="#" onClick={() => dispatch({ type: FILTER, payload: name })}>
                  <input type="radio" name="nav-list" id={`navList${id}`} className={style.navListCheck} />
                  <label htmlFor={`navList${id}`}>
                    {name}
                  </label>
                  {manage && <span className={style.cancelTag} onClick={() => tagManagement(id)}>X</span>}
                </a>
              </li>
            )
          })}
          <li>
            <a href='#' onClick={() => setManage(!manage)}>
              {manage ? '确定' : '标签管理'}
            </a>
            {manage && (<a href='#' className={style.reset} onClick={() => tagManagement(0)}>重置</a>)}
          </li>
        </ul>
      </div>
    </>

  )
}

export default NavList;