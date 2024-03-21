import React from 'react'
import s from './profile.module.css'
import { MyPost } from './myPosts/MyPost'
import { ProfileInfo } from './ProFileInfo/ProfileInfo'

export const Profile = () => {
	return (
		<div>
			<ProfileInfo />
			<MyPost />
		</div>
	)
}
