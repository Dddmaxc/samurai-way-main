import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import { PropsStateType } from './redux/state'
import { log } from 'console'

type Props = {
	state: PropsStateType
	addPost: (newPost: string) => void
}

function App(props: Props) {
	return (
		<>
			<Header />
			<div className='app-wrapper'>
				<Navbar
					SideBarPage={{
						friends: props.state.SideBarPage.friends,
					}}
				/>
				<Route
					exact
					path={'/dialogs'}
					render={() => <Dialogs dialogsData={props.state.DialogsPage} />}
				/>
				<Route
					path={'/profile'}
					render={() => (
						<Profile
							posts={props.state.profilePage.posts}
							addPost={props.addPost}
						/>
					)}
				/>
			</div>
		</>
	)
}

export default App
