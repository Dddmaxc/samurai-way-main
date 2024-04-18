import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import { State } from './redux/state'

type Props = {
	state: State
	dispatch: (action: any) => void
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
							dispatch={props.dispatch}
						/>
					)}
				/>
				<Route
					path={'/profile'}
					render={() => (
						<Profile
							posts={props.state._state.profilePage.posts}
							dispatch={props.dispatch}
						/>
					)}
				/>
			</div>
		</>
	)
}

export default App
