import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { store } from './redux/redux-store'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

// console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App
				state={store.getState()}
				dispatch={store.dispatch.bind(store)}
				store={store}
			/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
