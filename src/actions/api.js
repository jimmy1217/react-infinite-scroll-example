import { get } from './mainAction'

export const getRepositories = (postData) => get('https://api.github.com/search/repositories', postData)