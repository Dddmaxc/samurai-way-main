import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { store } from './redux/redux-store'
import ReactDOM from 'react-dom'
import App from './App'

// console.log(store.getState())

let rerenderEntireTree = (_state: any) => {
	console.log(store.getState())
	ReactDOM.render(
		<BrowserRouter>
			<App state={_state} dispatch={store.dispatch.bind(store)} />
		</BrowserRouter>,
		document.getElementById('root')
	)
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
	let state = store.getState()
	console.log('state:', state)
	rerenderEntireTree(state)
})
