import { ActionTypes } from './profile-reducer'
import { DialogsPage } from './state'

export type AddMessageActionType = {
	message: string
	type: 'ADD-MESSAGE'
}

const dialogsReducer = (state: DialogsPage, action: ActionTypes) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			let newMessage = {
				message: action.message,
				id: '6',
			}

			let newPhoto = {
				name: 'Gojo',
				id: '6',
				images: 'https://wallpapercave.com/wp/wp11187241.jpg',
			}

			state.dialogsData.push(newPhoto)
			state.messagesData.push(newMessage)
			return state
		default:
	}
	return state
}

export let addMessageAC = (message: any) => {
	return {
		type: 'ADD-MESSAGE',
		message: message,
	}
}

export default dialogsReducer
