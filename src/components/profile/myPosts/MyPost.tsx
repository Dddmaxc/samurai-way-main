import React from 'react'
import s from './MyPost.module.css'
import { Post } from './post/Post'

export const MyPost = () => {
	return (
		<>
			<div className={s.item}>
				My posts
				<div>
					<textarea></textarea>
					<button>Add post</button>
					<button>Remove</button>
				</div>
				<div className={s.posts}>
					<Post message='Hi, how are u?' like={13} />
					<Post message='it is my first post' like={15} />
				</div>
			</div>
		</>
	)
}
