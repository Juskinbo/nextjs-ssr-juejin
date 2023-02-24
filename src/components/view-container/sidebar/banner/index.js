//TODO
//广告位页面
import styles from './banner.module.scss';
import { CMSDOMAIN } from 'utils';
function Banner({ advertise }) {
	const { ad } = advertise;
	return (
		<>
			<div className={styles.banner}>
				<img src={`${CMSDOMAIN}${ad.data.url}`} className={styles.image} alt="###" />
			</div>
		</>
	);
}
export default Banner;