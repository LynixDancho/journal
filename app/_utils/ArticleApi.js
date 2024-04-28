const { default: axiosClient } = require("./axiosClient");

const getLatestArticles=()=>axiosClient.get('/articles?populate=*')
export default{

getLatestArticles
}