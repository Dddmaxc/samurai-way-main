import s from './Dialogs.module.css'
import { DialogItem } from './DialogITem/DialogItem'
import { Message } from './Message/Message'
import { InitialDialogsPage } from '../../redux/dialogs-reducer'
import { ChangeEvent } from 'react'

type Props = {
	dialogsReducer: InitialDialogsPage
	onKeyPressHandler: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
	value: string
	onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Dialogs = ({
	dialogsReducer,
	onKeyPressHandler,
	onChangeHandler,
	value,
}: Props) => {
	let state = dialogsReducer
	let dialogsElements = state.dialogsData.map((d, id) => (
		<div className={s.containerForImgAndName} key={id}>
			<div className={s.name}>
				<DialogItem name={d.name} id={d.id} />
			</div>
			<div className={s.images}>
				<img src={d.images} alt='img' />
			</div>
		</div>
	))

	let messagesElements = state.messagesData.map(m => (
		<div className={s.text}>
			<Message message={m.message} />
		</div>
	))

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
