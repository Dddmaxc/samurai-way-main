import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import { DialogItem } from './DialogITem/DialogItem'
import { Message } from './Message/Message'
import { DialogsPage } from '../../redux/state'
import { ChangeEvent, KeyboardEventHandler, useState } from 'react'

type Props = {
	dialogsData: DialogsPage
	addMessage: (newMessage: string) => void
}

export const Dialogs = ({ dialogsData, addMessage }: Props) => {
	const [value, setValue] = useState('')
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

	let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.currentTarget.value)
	}

	let onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		console.log(e)
		if (e.code === 'Enter') {
			addMessage(value)
			setValue('')
		}
	}

	return (
		<>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>{dialogsElements}</div>
				<div className={s.messages}>
					{messagesElements}
					<p>
						<div className={s.containerTextarea}>
							<img
								src='https://wallpapercave.com/wp/wp11187241.jpg'
								alt='img'
							/>
							<textarea
								value={value}
								onChange={onChangeHandler}
								className={s.textarea}
								onKeyPress={onKeyPressHandler}
							></textarea>
						</div>
					</p>
				</div>
			</div>
		</>
	)
}
