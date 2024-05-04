import { ChangeEvent, useState } from 'react'
import { addPostAC } from '../../../redux/profile-reducer'
import { MyPost } from './MyPost'
import { StoreType } from '../../../redux/redux-store'

export type PostType = {
	id: string
	message: string
	likesCount: number
}

export type PropsType = {
	store: StoreType
	posts?: Array<PostType>
}

export const MyPostContainer = (props: PropsType) => {
	const [newPost, setNewPost] = useState('')
	let state = props.store.getState()
	// let dispatch = props.store.dispatch

	let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setNewPost(e.currentTarget.value)
	}

	let addPost = () => {
		props.store.dispatch(addPostAC(newPost))
		setNewPost('')
	}

	return (
		<>
			<MyPost
				addPost={addPost}
				newPost={newPost}
				onChangeHandler={onChangeHandler}
				posts={state.profileReducer.posts}
			/>
		</>
	)
}
