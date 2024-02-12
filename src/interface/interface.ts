export interface IItem {
	id: number,
	name: string,
	price: number,
	content: string
}

export interface IState {
	loadingStatusState: string,
	loadingStatusPost: string,
	error: null,
	list: IItem[],
	item: Array<IItem>
}

export interface IParams {
	id: string | number
}