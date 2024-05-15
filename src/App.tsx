import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { Route } from 'react-router-dom'
import { InitialProfilePage } from './redux/profile-reducer'
import { InitialDialogsPage } from './redux/dialogs-reducer'
import { InitialSideBarPage } from './redux/sideBar-reducer'
import { StoreType } from './redux/redux-store'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import { KeyboardEvent, ChangeEvent } from 'react'
// import { State } from './redux/redux-store'

type State = {
	profileReducer: InitialProfilePage
	dialogsReducer: InitialDialogsPage
	sideBarReducer: InitialSideBarPage
}

type Props = {
	state: State
	dispatch: (action: any) => void
	store: StoreType
}

function App(props: Props) {
	return (
		<>
			<Header />
			<div className='app-wrapper'>
				<Navbar InitialSideBarPage={props.state.sideBarReducer} />
				<Route exact path={'/dialogs'} render={() => <DialogsContainer />} />
				<Route
					path={'/profile'}
					render={() => <Profile store={props.store} />}
				/>
			</div>
		</>
	)
}

export default App
