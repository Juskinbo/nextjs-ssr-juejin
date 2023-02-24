//TODO
//作者排行榜页面
import { CMSDOMAIN } from 'utils';
import styles from './user.module.scss';
function User({ user }) {
	return (
		<>
			<div className={styles.user}>
				<div className={styles.header}>🏅作者榜</div>
				<hr className={styles.split} />
				{user.map((item, index) => {
					const { userName, userIntro, company, avatar } = item;
					return (<a href="#" key={index}>
						<div className={styles.link}>
							{/* 头像 */}
							<div className={styles.avatar}>
								<img src={`${CMSDOMAIN}${avatar.data.url}`} alt="" />
							</div>
							{/* 文本描述 */}
							<div className={styles.details}>
								<p className={styles.name}>{userName}</p>
								<p className={styles.position}>
									{userIntro}
									{typeof (company) === 'string' && (<span>@{company}</span>)}
								</p>
							</div>
						</div>
					</a>)
				})}

				<hr className={styles.split} />
				<a href="">
					<div className={styles.more}>
						完整榜单&nbsp;&nbsp;<span>&gt;</span>
					</div>
				</a>
			</div>
		</>
	);
}
export default User;
