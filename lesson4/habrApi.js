const axios = require('axios');
const cheerio = require('cheerio');

const instance = axios.create({
    baseURL: 'https://habr.com/ru/'
});

const API = {
    getNews() {
        return instance.get('news/')
    },
    getArticles() {
        return instance.get('top/')
    },
    getHubs() {
        return instance.get('hubs/')
    }
}

module.exports = API;