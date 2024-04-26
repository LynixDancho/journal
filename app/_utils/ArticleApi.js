const { default: axiosClient } = require("./axiosClient");

const getLatestArticles=()=>axiosClient.get('/articles')
export default{

getLatestArticles
}