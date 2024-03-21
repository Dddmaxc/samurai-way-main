import './App.css'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './components/profile/Profile'
import { Dialogs } from './components/Dialogs/Dialogs'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<Route exact path={'/dialogs'} component={Dialogs} />
				<Route path={'/profile'} component={Profile} />
			</div>
		</BrowserRouter>
	)
}

export default App
