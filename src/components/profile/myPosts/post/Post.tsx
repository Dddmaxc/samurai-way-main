import React from 'react'
import s from './Post.module.css'

export const Post = () => {
	return (
		<>
			<div className={s.item}>
				<img
					src='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl9anf2ao3997q7orlmf1af46/public'
					alt='img'
				/>
				Post 1<span>like</span>
			</div>
		</>
	)
}
