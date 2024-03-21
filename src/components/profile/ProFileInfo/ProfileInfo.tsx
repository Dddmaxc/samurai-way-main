import s from './ProFileInfo.module.css'

export const ProfileInfo = () => {
	return (
		<div>
			<div className={s.content}>
				<img src='https://as2.ftcdn.net/v2/jpg/05/13/53/73/1000_F_513537371_bUfIF8OBN8wGZ3UyOns2o3OYINW1TIIA.jpg' />

				<div className={s.item}>ava + descriptions</div>
			</div>
		</div>
	)
}
