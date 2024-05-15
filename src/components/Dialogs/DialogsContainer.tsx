import { Dispatch, useState } from 'react'
import { addMessageAC } from '../../redux/dialogs-reducer'
import { AppRootState } from '../../redux/redux-store'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'

let mapStateToProps = (state: AppRootState) => {
	return { dialogsReducer: state.dialogsReducer }
}
let mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
	return {
		onKeyPressHandler: (value: string) => {
			dispatch(addMessageAC(value))
		},
	}
}

export const SuperDialogsContainer = (
	props: ReturnType<typeof mapStateToProps> &
		ReturnType<typeof mapDispatchToProps>
) => {
	const [value, setValue] = useState('')
	return (
		<>
			<Dialogs {...props} value={value} onChangeHandler={setValue} />
		</>
	)
}

export const DialogsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SuperDialogsContainer)
