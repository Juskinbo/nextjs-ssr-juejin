//TODO
//掘金app二维码页面
import styles from './sticky.module.scss';
import { CMSDOMAIN } from 'utils';
function Sticky({ sysinfo }) {
	const { codetitle, codeintro, webcode } = sysinfo;
	const { data } = webcode;
	return (
		<>
			<div className={styles.sticky}>
				<div className={styles['sticky-img']}>
					<img src={`${CMSDOMAIN}${data.url}`} alt="" />
				</div>
				<div className={styles.words}>
					<p className={styles.headline}>{codetitle}</p>
					<p className={styles.desc}>{codeintro}</p>
				</div>
			</div>
		</>
	);
}
export default Sticky;
