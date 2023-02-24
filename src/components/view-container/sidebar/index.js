//sidebar容器
import styles from './sidebar.module.scss';
import Banner from './banner';
import Sticky from './sticky';
import User from './user';
import { ReducerContext } from 'utils/reducer';
import { useContext } from 'react';
function SidebarContainer() {

	const { state, dispatch } = useContext(ReducerContext);
	const { sidebar } = state;

	const { advertises, sysinfo, user_ranks } = sidebar;

	return (
		<>
			<div className={styles['sidebar-container']}>
				{advertises.data.map((item, index) => {
					return <Banner advertise={item} key={index} />
				})}
				<Sticky sysinfo={sysinfo.data} />
				<User user={user_ranks.data[0].single_users.data} />
			</div>
		</>
	);
}

export default SidebarContainer;
