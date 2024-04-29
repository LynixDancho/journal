const { default: axiosClient } = require("./axiosClient");

const getLatestArticles=()=>axiosClient.get('/articles?populate=*')
const getArticleById=(id)=>axiosClient.get( `/articles/${id}?populate=*`)
const getUserById=(id)=>axiosClient.get( `/users/${id}?populate=*`)

export default{

getLatestArticles,
getArticleById,
getUserById
}