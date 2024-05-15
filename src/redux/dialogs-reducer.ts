import { ActionTypes } from './profile-reducer'

export type AddMessageActionType = {
	message: string
	type: 'ADD-MESSAGE'
}

export type Dialog = {
	name: string
	id: string
	images: string
}

type Message = {
	message: string
	id: string
}

export type InitialDialogsPage = {
	dialogsData: Dialog[]
	messagesData: Message[]
}

let initialState: InitialDialogsPage = {
	dialogsData: [
		{
			name: 'Naruto',
			id: '1',
			images:
				'https://i.pinimg.com/564x/83/b2/e0/83b2e0af5f53890718815c28ea0c76e0.jpg',
		},
		{
			name: 'Saitama',
			id: '2',
			images:
				'https://i.pinimg.com/564x/81/d1/0d/81d10d41b70c668805c9a1e90cf5f188.jpg',
		},
		{
			name: 'Itachi',
			id: '3',
			images:
				'https://i.pinimg.com/564x/f6/6a/85/f66a85ca91d3e3f751472a33701eb7b8.jpg',
		},
		{
			name: 'Arima',
			id: '4',
			images:
				'https://i.pinimg.com/736x/d8/fa/3a/d8fa3a738ae24ca0928d4953bcfc96d0.jpg',
		},
		{
			name: 'Julius',
			id: '5',
			images:
				'https://i.pinimg.com/564x/6b/3c/fd/6b3cfdcef5a55a51f313401327d8caa0.jpg',
		},
	],
	messagesData: [
		{ message: 'Hi', id: '1' },
		{ message: 'How are u?', id: '2' },
		{ message: 'Set me yr heard', id: '3' },
		{ message: 'I love u', id: '4' },
		{ message: 'I like to be happy', id: '5' },
	],
}

const dialogsReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			let newMessage = {
				message: action.message,
				id: '6',
			}

			let copyState = { ...state }

			copyState.messagesData.push(newMessage)
			return copyState
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
