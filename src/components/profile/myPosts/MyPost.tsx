import React, { ChangeEvent, useState } from 'react'
import s from './MyPost.module.css'
import { Post } from './post/Post'
import { addPostAC } from '../../../redux/profile-reducer'

type PropsPostType = {
	id: string
	message: string
	likesCount: number
}

export type PostType = {
	dispatch: (action: any) => void
	posts: Array<PropsPostType>
}

export const MyPost = (props: PostType) => {
	const [newPost, setNewPost] = useState('')

	let postsElements = props.posts.map(p => (
		<Post message={p.message} like={p.likesCount} />
	))

	let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setNewPost(e.currentTarget.value)
	}

	let addPost = () => {
		let action = addPostAC(newPost)
		props.dispatch(action)
		setNewPost('')
	}

	return (
		<>
			<div className={s.item}>
				<h3>My posts</h3>
				<div>
					<textarea
						className={s.textarea}
						value={newPost}
						onChange={onChangeHandler}
					/>
					<button onClick={addPost}>add post</button>
					<button>remove</button>
				</div>
				<div className={s.postsElements}>{postsElements}</div>
			</div>
		</>
	)
}
