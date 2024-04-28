const { default: axiosClient } = require("./axiosClient");

const getLatestArticles=()=>axiosClient.get('/articles?populate=*')
const getArticleById=(id)=>axiosClient.get( `/articles/${id}?/populate=*`)
export default{

getLatestArticles,
getArticleById
}