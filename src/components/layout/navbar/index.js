import styles from './nav.module.scss';
import logo from '@/common/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'utils/theme';
import LayoutContext from 'utils/layoutContext';
function Navbar() {
  const { categories } = useContext(LayoutContext);
  const { theme, SetTheme } = useContext(ThemeContext)
  const [cate, setCate] = useState([]);
  const [read, SetRead] = useState([]);

  useEffect(() => {
    let arr = new Array(categories.length);
    let readArr = new Array(categories.length);
    //对返回数据按照id从小到大排序
    for (let item of categories) {
      arr[item.id - 1] = item;
      //判断是否有label,有的话就标记为未读
      if (typeof (item.attributes.label) === 'string') {
        readArr[item.id - 1] = false;
      }
      else {
        readArr[item.id - 1] = true;
      }
    }
    setCate(arr);
    SetRead(readArr);

  }, [])

  const handleClick = id => {
    SetRead(arr => {
      arr[id - 1] = true;
      //必须重新渲染，否则不会re-render
      return [...arr]
    })
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles['nav-container']}>
          {/* Todo：全部做完将这里导航到首页 */}
          <Link href="/" className={styles.logocontainer}>
            <Image src={logo} alt='掘金Logo' className={styles.logo} />
            <span>稀土掘金</span>
          </Link>
          <div className={styles['navlist-container']}>
            <ul className={styles.nav}>
              {cate.map((item, index) => {
                return (
                  <li key={item.id} onClick={() => handleClick(item.id)} >
                    <a href='#'>
                      <input type="radio" name="nav" id={`nav${item.id}`} className={styles.navCheck} defaultChecked={item.id === 1 ? true : false} />
                      <label htmlFor={`nav${item.id}`}>
                        {item.attributes.name}
                      </label>
                    </a>
                    {!read[item.id - 1] &&
                      (<span className={styles.label}>{item.attributes.label}</span>)
                    }
                  </li>
                )
              })}
            </ul>
          </div>
          {/* 切换主题样式 */}
          {theme === 'light' ? <button className={styles.light} onClick={() => SetTheme('dark')}>🌙</button> :
            <button className={styles.dark} onClick={() => SetTheme('light')}>🔆</button>}
        </div>
      </div>

    </>
  )
}

export default Navbar
