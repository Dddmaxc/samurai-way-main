import s from '../Dialogs.module.css'

type PropsMessageType = {
	message: string
}

export const Message = (props: PropsMessageType) => {
	return (
		<>
			<div className={s.message}>{props.message}</div>
		</>
	)
}
