import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogItem'
import { Message } from './Message'

let dialogsData = [
	{ name: 'Naruto', id: '1' },
	{ name: 'Saitama', id: '2' },
	{ name: 'Itachi', id: '3' },
	{ name: 'Arima', id: '4' },
	{ name: 'Akama', id: '5' },
]

let messagesData = [
	{ message: 'Hi', id: '1' },
	{ message: 'How are u?', id: '2' },
	{ message: 'Set me yr heard', id: '3' },
	{ message: 'I love u', id: '4' },
	{ message: 'I like to be happy', id: '5' },
]

let dialogsElements = dialogsData.map(d => (
	<DialogItem name={d.name} id={d.id} />
))

let messagesElements = messagesData.map(m => <Message message={m.message} />)

export const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>{dialogsElements}</div>
			<div className={s.messages}>{messagesElements}</div>
		</div>
	)
}
