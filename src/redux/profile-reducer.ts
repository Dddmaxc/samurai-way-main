import { AddMessageActionType } from './dialogs-reducer'

export type ActionTypes = AddPostActionType | AddMessageActionType
export type AddPostActionType = {
	message: string
	type: 'ADD-POST'
}

type Post = {
	id: string
	message: string
	likesCount: number
}

export type InitialProfilePage = {
	posts: Post[]
}

let initialState: InitialProfilePage = {
	posts: [
		{ id: '1', message: 'Hi, how are u?', likesCount: 13 },
		{ id: '2', message: 'it is my first post', likesCount: 15 },
	],
}

const profileReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'ADD-POST':
			let newPost = {
				id: '10',
				message: action.message,
				likesCount: 0,
			}
			let copyState = { ...state }
			copyState.posts = [...state.posts, newPost]

			return copyState
		default:
			return state
	}
}

export let addPostAC = (newPost: string) => {
	return {
		type: 'ADD-POST',
		message: newPost,
	}
}

export default profileReducer
