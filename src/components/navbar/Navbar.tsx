import { NavLink } from 'react-router-dom'
import s from './navbar.module.css'
import { SideBarPage } from '../../redux/state'

type Props = {
	SideBarPage: SideBarPage
}

export const Navbar = ({ SideBarPage }: Props) => {
	let newSideData = SideBarPage.friends.map((f, i) => {
		return (
			<div key={i}>
				{f.name}
				<p>
					<img src={f.images} alt='img' />
				</p>
			</div>
		)
	})
	return (
		<>
			<nav className={s.nav}>
				<div className={s.item}>
					<NavLink to='/profile'>Profile</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/dialogs'>Messages</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/news'>News</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/music'>Music</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/settings'>Settings</NavLink>
				</div>
				<div className={s.sideBarFriends}>{newSideData}</div>
			</nav>
		</>
	)
}
