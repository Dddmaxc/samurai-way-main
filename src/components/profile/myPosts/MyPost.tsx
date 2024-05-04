import React, { ChangeEvent, useState } from 'react'
import s from './MyPost.module.css'
import { Post } from './post/Post'

type PropsPostType = {
	id: string
	message: string
	likesCount: number
}

export type PostType = {
	addPost: () => void
	posts: Array<PropsPostType>
	newPost: string
	onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const MyPost = (props: PostType) => {
	const postsElements = props.posts.map(p => (
		<Post message={p.message} like={p.likesCount} />
	))

	return (
		<>
			<div className={s.item}>
				<h3>My posts</h3>
				<div>
					<textarea
						className={s.textarea}
						value={props.newPost}
						onChange={props.onChangeHandler}
					/>
					<button onClick={props.addPost}>add post</button>
					<button>remove</button>
				</div>
				<div className={s.postsElements}>{postsElements}</div>
			</div>
		</>
	)
}
