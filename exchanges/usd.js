async function getUsd() {
    try {
        let response = await axios('http://coincap.io/front');
        //var usdValues;
        var coincapData = response.data.map(coin => ({ "coin": coin.short, "value": coin.price }));
        //console.log(response);
        //console.log(coincapData)
        return coincapData;
    } catch (error) {
        console.log(error);
    }
},