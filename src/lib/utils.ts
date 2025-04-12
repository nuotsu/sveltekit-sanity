export function count(arr: Array<any> | number, singular: string = 'item', plural?: string) {
	const num = typeof arr === 'number' ? arr : arr?.length || 0
	return `${num || 0} ${num === 1 ? singular : plural || singular + 's'}`
}
