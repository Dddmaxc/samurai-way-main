import { InitialDialogsPage } from '../../redux/dialogs-reducer'
import { ChangeEvent, useState } from 'react'
import { addMessageAC } from '../../redux/dialogs-reducer'
import { StoreType } from '../../redux/redux-store'
import { Dialogs } from './Dialogs'

type Props = {
	store: StoreType
}

export const DialogsContainer = ({ store }: Props) => {
	let state = store.getState().dialogsReducer
	const [value, setValue] = useState('')

	let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.currentTarget.value)
	}

	let onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.code === 'Enter') {
			store.dispatch(addMessageAC(value))
			setValue('')
		}
	}

	return (
		<>
			<Dialogs
				onKeyPressHandler={onKeyPressHandler}
				value={value}
				onChangeHandler={onChangeHandler}
				dialogsReducer={state}
			/>
		</>
	)
}
