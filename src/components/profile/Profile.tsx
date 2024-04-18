import s from './profile.module.css'
import { MyPost, PostType } from './myPosts/MyPost'
import { ProfileInfo } from './ProFileInfo/ProfileInfo'

export const Profile = (props: PostType) => {
	return (
		<div>
			<ProfileInfo />
			<MyPost posts={props.posts} dispatch={props.dispatch} />
		</div>
	)
}
