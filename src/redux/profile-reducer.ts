import { AddMessageActionType } from './dialogs-reducer'
import { ProfilePage } from './state'

export type ActionTypes = AddPostActionType | AddMessageActionType
export type AddPostActionType = {
	message: string
	type: 'ADD-POST'
}

const profileReducer = (state: ProfilePage, action: ActionTypes) => {
	switch (action.type) {
		case 'ADD-POST':
			let newPost = {
				id: '10',
				message: action.message,
				likesCount: 0,
			}
			state.posts.push(newPost)
			return state
		default:
			return state
	}
}

export let addPostAC = (newPost: any) => {
	return {
		type: 'ADD-POST',
		message: newPost,
	}
}

export default profileReducer
