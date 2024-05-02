import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'
import { InitialProfilePage } from './redux/profile-reducer'
import { InitialDialogsPage } from './redux/dialogs-reducer'
import { InitialSideBarPage } from './redux/sideBar-reducer'
// import { State } from './redux/redux-store'

type State = {
	profileReducer: InitialProfilePage
	dialogsReducer: InitialDialogsPage
	sideBarReducer: InitialSideBarPage
}

type Props = {
	state: State
	dispatch: (action: any) => void
}

function App(props: Props) {
	return (
		<>
			<Header />
			<div className='app-wrapper'>
				<Navbar InitialSideBarPage={props.state.sideBarReducer} />
				<Route
					exact
					path={'/dialogs'}
					render={() => (
						<Dialogs
							InitialDialogsPage={props.state.dialogsReducer}
							dispatch={props.dispatch}
						/>
					)}
				/>
				<Route
					path={'/profile'}
					render={() => (
						<Profile
							posts={props.state.profileReducer.posts}
							dispatch={props.dispatch}
						/>
					)}
				/>
			</div>
		</>
	)
}

export default App
