import React from 'react'
import s from './MyPost.module.css'
import { Post } from './post/Post'

export const MyPost = () => {
	let postData = [
		{ id: '1', message: 'Hi, how are u?', likesCount: 13 },
		{ id: '2', message: 'it is my first post', likesCount: 15 },
	]

	let posts = postData.map(p => (
		<Post message={p.message} like={p.likesCount} />
	))

	return (
		<>
			<div className={s.item}>
				<h3>My posts</h3>
				<div>
					<textarea></textarea>
					<button>Add post</button>
					<button>Remove</button>
				</div>
				<div className={s.posts}>{posts}</div>
			</div>
		</>
	)
}
