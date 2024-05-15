import s from './Dialogs.module.css'
import { DialogItem } from './DialogITem/DialogItem'
import { Message } from './Message/Message'
import { InitialDialogsPage } from '../../redux/dialogs-reducer'

type Props = {
	dialogsReducer: InitialDialogsPage
	onKeyPressHandler: (e: string) => void
	value: string
	onChangeHandler: (e: string) => void
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
								onChange={e => onChangeHandler(e.currentTarget.value)}
								className={s.textarea}
								onKeyPress={e =>
									e.key === 'Enter'
										? (onKeyPressHandler(e.currentTarget.value),
										  onChangeHandler(''))
										: null
								}
							></textarea>
						</div>
					</p>
				</div>
			</div>
		</>
	)
}
