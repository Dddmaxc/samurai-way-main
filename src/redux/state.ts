import { message } from 'antd'
import { useState } from 'react'

type Dialog = {
	name: string
	id: string
	images: string
}

export type Post = {
	id: string
	message: string
	likesCount: number
}

type ProfilePageState = {
	posts: Post[]
}

type Message = {
	message: string
	id: string
}

type Friends = {
	id: string
	name: string
	images: string
}

let rerenderEntireTree = (state: PropsStateType) => {
	console.log('render')
}

export type MessagesPageState = {
	dialogsData: Dialog[]
	messagesData: Message[]
}

export type SideBarPageState = {
	friends: Friends[]
}

export type PropsStateType = {
	profilePage: ProfilePageState
	DialogsPage: MessagesPageState
	SideBarPage: SideBarPageState
}

let state: PropsStateType = {
	profilePage: {
		posts: [
			{ id: '1', message: 'Hi, how are u?', likesCount: 13 },
			{ id: '2', message: 'it is my first post', likesCount: 15 },
		],
	},
	DialogsPage: {
		dialogsData: [
			{
				name: 'Naruto',
				id: '1',
				images:
					'https://i.pinimg.com/564x/83/b2/e0/83b2e0af5f53890718815c28ea0c76e0.jpg',
			},
			{
				name: 'Saitama',
				id: '2',
				images:
					'https://i.pinimg.com/564x/81/d1/0d/81d10d41b70c668805c9a1e90cf5f188.jpg',
			},
			{
				name: 'Itachi',
				id: '3',
				images:
					'https://i.pinimg.com/564x/f6/6a/85/f66a85ca91d3e3f751472a33701eb7b8.jpg',
			},
			{
				name: 'Arima',
				id: '4',
				images:
					'https://i.pinimg.com/736x/d8/fa/3a/d8fa3a738ae24ca0928d4953bcfc96d0.jpg',
			},
			{
				name: 'Julius',
				id: '5',
				images:
					'https://i.pinimg.com/564x/6b/3c/fd/6b3cfdcef5a55a51f313401327d8caa0.jpg',
			},
		],
		messagesData: [
			{ message: 'Hi', id: '1' },
			{ message: 'How are u?', id: '2' },
			{ message: 'Set me yr heard', id: '3' },
			{ message: 'I love u', id: '4' },
			{ message: 'I like to be happy', id: '5' },
		],
	},
	SideBarPage: {
		friends: [
			{
				id: '1',
				name: 'Pain',
				images:
					'https://www.pngitem.com/pimgs/m/3-30113_pain-naruto-wallpaper-images-on-genchi-info-pain.png',
			},
			{
				id: '2',
				name: 'Hisoka',
				images:
					'https://i1.sndcdn.com/artworks-FyKpyQl5fw5nFmGv-KlLLvQ-t500x500.jpg',
			},
			{
				id: '1',
				name: 'Invoker',
				images:
					'https://qph.cf2.quoracdn.net/main-qimg-e434f38dec163b2aeba7b300c2b95408.webp',
			},
		],
	},
}

export let addPost = (postMessage: string) => {
	let newPost = {
		id: '3',
		message: postMessage,
		likesCount: 0,
	}

	state.profilePage.posts.push(newPost)
	rerenderEntireTree(state)
}

export let subscriber = (observer: (state: PropsStateType) => void) => {
	rerenderEntireTree = observer
}

export default state
