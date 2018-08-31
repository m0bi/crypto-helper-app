const axios = require('axios');

const LIVE = axios('/live');
const BOOK = axios('/book');
const CASH = axios('/cash');

(async function populate() {
    const PROMISE = [];
    PROMISE.push(LIVE);
    PROMISE.push(BOOK);
    PROMISE.push(CASH);
    let result = await Promise.all(PROMISE);
    console.log(result);
})();