import React, { ChangeEvent, useState } from 'react'
import s from './MyPost.module.css'
import { Post } from './post/Post'

type PropsPostType = {
	id: string
	message: string
	likesCount: number
}

export type PostType = { posts: Array<PropsPostType> }

export const MyPost = (props: PostType) => {
	const [newPost, setNewPost] = useState('')

	let postsElements = props.posts.map(p => (
		<Post message={p.message} like={p.likesCount} />
	))

	let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setNewPost(e.currentTarget.value)
	}

	let addPost = () => {
		alert(newPost)
	}

	return (
		<>
			<div className={s.item}>
				<h3>My posts</h3>
				<div>
					<textarea value={newPost} onChange={onChangeHandler}></textarea>
					<button onClick={addPost}>add post</button>
					<button>remove</button>
				</div>
				<div className={s.postsElements}>{postsElements}</div>
			</div>
		</>
	)
}
