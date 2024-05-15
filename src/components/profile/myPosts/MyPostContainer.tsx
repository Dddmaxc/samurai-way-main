import { Dispatch, useState } from 'react'
import { addPostAC } from '../../../redux/profile-reducer'
import { MyPost } from './MyPost'
import { AppRootState, StoreType } from '../../../redux/redux-store'
import { AnyAction } from 'redux'
import { connect } from 'react-redux'

export type PostType = {
	id: string
	message: string
	likesCount: number
}

export type PropsType = {
	store: StoreType
	posts?: Array<PostType>
}

let mapStateToProps = (state: AppRootState) => {
	return { posts: state.profileReducer.posts }
}

let mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
	return {
		addPost: (addPost: string) => {
			dispatch(addPostAC(addPost))
		},
	}
}

export const SuperMyPostContainer = (
	props: ReturnType<typeof mapStateToProps> &
		ReturnType<typeof mapDispatchToProps>
) => {
	const [newPost, setNewPost] = useState('')
	return (
		<>
			<MyPost {...props} newPost={newPost} onChangeHandler={setNewPost} />
		</>
	)
}

export const MyPostContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SuperMyPostContainer)
