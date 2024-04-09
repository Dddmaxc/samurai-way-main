import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogITem/DialogItem'
import { Message } from './Message/Message'
import { MessagesPageState } from '../../redux/state'

type Props = {
	dialogsData: MessagesPageState
}

export const Dialogs = ({ dialogsData }: Props) => {
	let dialogsElements = dialogsData.dialogsData.map((d, id) => (
		<div className={s.containerForImgAndName} key={id}>
			<div className={s.name}>
				<DialogItem name={d.name} id={d.id} />
			</div>
			<div className={s.images}>
				<img src={d.images} alt='img' />
			</div>
		</div>
	))

	let messagesElements = dialogsData.messagesData.map(m => (
		<div className={s.text}>
			<Message message={m.message} />
		</div>
	))
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>{messagesElements}</div>
		</div>
	)
}
