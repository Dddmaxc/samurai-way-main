import { NavLink } from 'react-router-dom'
import s from '../Dialogs.module.css'

type PropsDialogType = {
	name: string
	id: string
}

export const DialogItem = (props: PropsDialogType) => {
	let path = '/dialogs/' + props.id
	return (
		<>
			<div className={s.dialog}>
				<NavLink to={path}>{props.name}</NavLink>
			</div>
		</>
	)
}
