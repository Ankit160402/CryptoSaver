var cur = "USDT"
var ticker = "BTC"
var refreshrate = 2.5
var logolink = 'https://cdn.coindcx.com/static/coins/btc.svg';

const cryptocurrencies = {
    'BTC': 'Bitcoin',
    'ETH': 'Ethereum',
    'USDT': 'Tether',
    'BNB': 'BNB', 
    'XRP': 'XRP', 
    'STETH': 'Lido Staked Ether', 
    'ADA': 'Cardano', 
    'DOGE': 'Dogecoin', 
    'SOL': 'Solana', 
    'TRX': 'TRON', 
    'MATIC': 'Polygon', 
    'LTC': 'Litecoin', 
    'DOT': 'Polkadot', 
    'DAI': 'Dai', 
    'WBTC': 'Wrapped Bitcoin', 
    'LINA': 'LINA',
    'AVAX': 'Avalanche', 
    'SHIB': 'Shiba Inu', 
    'LEO': 'LEO Token', 
    'UNI': 'Uniswap', 
    'LINK': 'Chainlink', 
    'XMR': 'Monero', 
    'ATOM': 'Cosmos Hub', 
    'OKB': 'OKB', 
    'XLM': 'Stellar', 
    'ETC': 'Ethereum Classic', 
    'BCH': 'Bitcoin Cash', 
    'LDO': 'Lido DAO', 
    'ICP': 'Internet Computer', 
    'QNT': 'Quant', 
    'FIL': 'Filecoin', 
    'CRO': 'Cronos', 
    'HBAR': 'Hedera', 
    'APT': 'Aptos', 
    'ARB': 'Arbitrum', 
    'VET': 'VeChain', 
    'NEAR': 'NEAR Protocol', 
    'FRAX': 'Frax', 
    'GRT': 'The Graph', 
    'BSCX': 'BSCEX', 
    'APE': 'ApeCoin', 
    'RPL': 'Rocket Pool', 
    'RETH': 'Rocket Pool ETH', 
    'ALGO': 'Algorand', 
    'STX': 'Stacks', 
    'EGLD': 'MultiversX', 
    'EOS': 'EOS', 
    'AAVE': 'Aave', 
    'RNDR': 'Render', 
    'SAND': 'The Sandbox', 
    'OP': 'Optimism', 
    'FTM': 'Fantom', 
    'XTZ': 'Tezos', 
    'WBT': 'WhiteBIT Token', 
    'BGB': 'Bitget Token', 
    'THETA': 'Theta Network', 
    'XRD': 'Radix', 
    'MANA': 'Decentraland', 
    'BIT': 'BitDAO', 
    'IMX': 'ImmutableX', 
    'AXS': 'Axie Infinity', 
    'SNX': 'Synthetix Network', 
    'KCS': 'KuCoin', 
    'CRV': 'Curve DAO', 
    'GT': 'Gate', 
    'MKR': 'Maker', 
    'NEO': 'NEO', 
    'FLOW': 'Flow', 
    'LUNC': 'Terra Luna Classic', 
    'GALA': 'GALA', 
    'BTT': 'BitTorrent', 
    'BSV': 'Bitcoin SV', 
    'PAXG': 'PAX Gold', 
    'XAUT': 'Tether Gold', 
    'KLAY': 'Klaytn', 
    'XDC': 'XDC Network', 
    'KAVA': 'Kava', 
    'INJ': 'Injective', 
    'TKX': 'Tokenize Xchange', 
    'MIOTA': 'IOTA', 
    'HT': 'Huobi', 
    'XEC': 'eCash', 
    'FRXETH': 'Frax Ether', 
    'MINA': 'Mina Protocol', 
    'PEPE': 'Pepe', 
    'GMX': 'GMX', 
    'CFX': 'Conflux', 
    'CHZ': 'Chiliz', 
    'FXS': 'Frax Share', 
    'NEXO': 'NEXO', 
    'DASH': 'Dash'
};



let options = "";
for (const ticker in cryptocurrencies) {
    options += `<option value="${ticker}">${cryptocurrencies[ticker]}</option>`;
}
  
$("#crypto-select").append(options);


function fetchdata(){
    fetch('https://api3.binance.com/api/v3/ticker/price')
  .then(response => response.json())
  .then(data => {
    const Data = data.find(item => item.symbol === ticker.toUpperCase()+cur.toUpperCase());
    if (Data) {
      $("#info").html(price_format(Data.price.replace(/\.?0+$/, "")));
    } else {
        $("#info").html("NaN");
        $("#img").attr("src","image/Error.svg")
    }
  })
}

fetchdata();

function Refresh() {
    fetchdata()
    setTimeout(Refresh, refreshrate*1000);
}

// Call the function for the first time
Refresh();

function price_format(price) {
    if (price >999){
        return Number(price).toLocaleString("en-US");
    }else{
        return price;
    }
};


function handleCurrencyChange(curr){
    cur = curr.target.value
    fetchdata();
    $("#img").attr("src",'https://cdn.coindcx.com/static/coins/'+ticker.toLowerCase()+'.svg')
    $("#currency").html(cur)
}

function handleTagChange(tag){
    ticker = tag.target.value
    fetchdata();
    $("#img").attr("src",'https://cdn.coindcx.com/static/coins/'+ticker.toLowerCase()+'.svg')
    $("#ticker").html(ticker)
}

function handleRefreshRateChange(rate){
    refreshrate = rate.target.value
    $("#refreshrate").html(refreshrate)
    fetchdata();
}


// Pop Up Script
var myModal = new bootstrap.Modal(document.getElementById('myModal'));
myModal.show();



