import s from './profile.module.css'
import { ProfileInfo } from './ProFileInfo/ProfileInfo'
import { MyPostContainer, PostType } from './myPosts/MyPostContainer'
import { AppRootState, StoreType } from '../../redux/redux-store'

type PropsType = {
	store: StoreType
	dispatch?: (action: any) => void
	posts?: Array<PostType>
}

export const Profile = (props: PropsType) => {
	return (
		<div>
			<ProfileInfo />
			<MyPostContainer />
		</div>
	)
}
