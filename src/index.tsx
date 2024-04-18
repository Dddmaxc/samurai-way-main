import { BrowserRouter } from 'react-router-dom'
import './index.css'
import store, { State } from './redux/state'
import ReactDOM from 'react-dom'
import App from './App'
import state from './redux/state'

let rerenderEntireTree = (_state: any) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} dispatch={store.dispatch.bind(store)} />
		</BrowserRouter>,
		document.getElementById('root')
	)
}
rerenderEntireTree(store.getState())
store.subscriber(rerenderEntireTree)
