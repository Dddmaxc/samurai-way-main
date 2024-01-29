import React from 'react'
import s from './Post.module.css'

type PostPropsType = {
	message: string
	like: number
}

export const Post = (props: PostPropsType) => {
	return (
		<>
			<div className={s.item}>
				<img
					src='https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl9anf2ao3997q7orlmf1af46/public'
					alt='img'
				/>
				{props.message}
			</div>
			<div>
				<span>like {props.like}</span>
			</div>
		</>
	)
}
