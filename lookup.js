var Combinatorics = require('js-combinatorics');

const cmb3 = findCombi(3)
findTriArbOppo(cmb3)

const cmb4 = findCombi(4)
findQuadArbOppo(cmb4)

function findQuadArbOppo(cmb){
    while(c = cmb.next()) {
        let btc_count = 0
        let usdt_count = 0
        let eos_count = 0
        let eth_count = 0
        c.forEach( e => {
            const pair = e.split('-')
            if (pair[1] == 'btc' || pair[0] == 'btc') {
                btc_count++
            }
            if (pair[1] == 'usdt' || pair[0] == 'usdt') {
                usdt_count++
            }
            if (pair[1] == 'eos' || pair[0] == 'eos') {
                eos_count++
            }
            if (pair[1] == 'eth' || pair[0] == 'eth') {
                eth_count++
            }

        })
        if ( usdt_count % 2 == 0 && btc_count % 2 == 0 && 
             eos_count  % 2 == 0 && eth_count % 2 == 0) {
            console.log(c);
        }
    }
}

function findTriArbOppo(cmb){
    while(c = cmb.next()) {
        let coins = new Set()
        c.forEach( e => {
            const pair = e.split('-')
            coins.add(pair[0]) 
            coins.add(pair[1]) 
        })
        if (coins.size == 3) {
            console.log(c);
        }
    }
}

function findCombi(n){
    const coins = ['usdt', 'btc', 'eth', 'eos']
    const markets = ['btc-usdt','eth-usdt','eos-usdt','eth-btc', 'eos-btc', 'eos-eth']
    const cmb = Combinatorics.combination(markets, n);
    console.log('combinations count: ', cmb.length)
    return cmb
}