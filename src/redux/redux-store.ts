import { combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sideBarReducer from './sideBar-reducer'

let rootReducer = combineReducers({
	profileReducer,
	dialogsReducer,
	sideBarReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)
