
const axios = require('axios');

module.exports = {
    master: async function populate() {
        try{
        const LIVE = axios('/live');
        const BOOK = axios('/book');
        const CASH = axios('/cash');

        const PROMISE = [];
        PROMISE.push(LIVE);
        PROMISE.push(BOOK);
        PROMISE.push(CASH);
        let result = await Promise.all(PROMISE);
        return result;
        }catch(error){
            console.log(err)
        }
    }
}