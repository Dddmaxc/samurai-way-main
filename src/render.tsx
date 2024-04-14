import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PropsStateType, addPost } from './redux/state'

export let rerenderEntireTree = (state: PropsStateType) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} />
		</BrowserRouter>,
		document.getElementById('root')
	)
}
