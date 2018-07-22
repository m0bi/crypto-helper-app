(async () => {
    let binance = new ccxt.binance ({ verbose: true }) // log HTTP requests
    await binance.load_markets () // request markets
    console.log (binance.id, binance.markets)    // output a full list of all loaded markets
    console.log (Object.keys (binance.markets)) // output a short list of market symbols
    console.log (binance.markets['BTC/USD'])    // output single market details
    await binance.load_markets () // return a locally cached version, no reload
    let reloadedMarkets = await binance.load_markets (true) // force HTTP reload = true
    console.log (reloadedMarkets['ETH/BTC'])
}) ()