type Friend = {
	id: string
	name: string
	images: string
}

export type InitialSideBarPage = {
	friends: Friend[]
}

let initialState: InitialSideBarPage = {
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
}
const sideBarReducer = (state = initialState, action: any) => {
	return state
}

export default sideBarReducer
