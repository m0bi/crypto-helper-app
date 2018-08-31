
const axios = require('axios');

module.exports = {
    master: async function populate() {
        try{
        const LIVE = axios.get('/live');
        const BOOK = axios.get('/book');
        const CASH = axios.get('/cash');

        const PROMISE = [];
        PROMISE.push(LIVE);
        PROMISE.push(BOOK);
        PROMISE.push(CASH);
        let result = await Promise.all(PROMISE);
        return result;
        } catch(error){
            console.log(err)
        }
    }
}