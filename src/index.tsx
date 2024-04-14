import { BrowserRouter } from 'react-router-dom'
import './index.css'
import state, { PropsStateType, addPost, subscriber } from './redux/state'
import ReactDOM from 'react-dom'
import App from './App'

let rerenderEntireTree = (state: PropsStateType) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} />
		</BrowserRouter>,
		document.getElementById('root')
	)
}
rerenderEntireTree(state)
subscriber(rerenderEntireTree)
