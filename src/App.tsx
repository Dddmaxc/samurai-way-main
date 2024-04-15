import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import { State } from './redux/state'
import { log } from 'console'

type Props = {
	state: State
	addPost: (newPost: string) => void
	addMessage: (newPost: string) => void
}

function App(props: Props) {
	return (
		<>
			<Header />
			<div className='app-wrapper'>
				<Navbar
					SideBarPage={{
						friends: props.state._state.SideBarPage.friends,
					}}
				/>
				<Route
					exact
					path={'/dialogs'}
					render={() => (
						<Dialogs
							dialogsData={props.state._state.DialogsPage}
							addMessage={props.addMessage}
						/>
					)}
				/>
				<Route
					path={'/profile'}
					render={() => (
						<Profile
							posts={props.state._state.profilePage.posts}
							addPost={props.addPost}
						/>
					)}
				/>
			</div>
		</>
	)
}

export default App
