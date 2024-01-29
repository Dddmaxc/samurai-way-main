import React from 'react'
import s from './profile.module.css'
import { MyPost } from './myPosts/MyPost'

export const Profile = () => {
	return (
		<>
			<div className={s.content}>
				<img src='https://as2.ftcdn.net/v2/jpg/05/13/53/73/1000_F_513537371_bUfIF8OBN8wGZ3UyOns2o3OYINW1TIIA.jpg' />

				<div className={s.item}>ava + descriptions</div>
				<MyPost />
			</div>
		</>
	)
}
