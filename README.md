# twstockjs

[![npm](https://img.shields.io/npm/v/twstockjs)](https://www.npmjs.com/package/twstockjs)
[![Travis (.org)](https://img.shields.io/travis/bigtongue5566/twstockjs)](https://travis-ci.org/bigtongue5566/twstockjs)
[![Coveralls github](https://img.shields.io/coveralls/github/bigtongue5566/twstockjs)](https://coveralls.io/github/bigtongue5566/twstockjs)
[![Gitter](https://img.shields.io/gitter/room/bigtongue5566/twstockjs)](https://gitter.im/twstockjs/community)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8075958aa3b64d849ed4ea54321bb524)](https://www.codacy.com/manual/bigtongue5566/twstockjs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=bigtongue5566/twstockjs&amp;utm_campaign=Badge_Grade)
![David](https://img.shields.io/david/bigtongue5566/twstockjs)

台股資料library

## Install

```bash
npm i twstockjs
```

## Usage

```javascript
const { Basic, Realtime } = require('twstockjs');
```

## API

### Basic

#### `getStockList()`

取得上市上櫃證券清單

```javascript
const stockList = await getStockList();
stockList.get('2330');
stockList.get('3260');
```

取得上市證券清單

```javascript
const stockList = await getStockList('tse');
stockList.get('2330');
```

取得上櫃證券清單

```javascript
const stockList = await getStockList('otc');
stockList.get('3260');
```

#### `getCorpInfo(string)`

取得公司資料

```javascript
await Basic.getCorpInfo('2330');
await Basic.getCorpInfo('台積電');
await Basic.getCorpInfo('0050'); // null
```

#### `isTradingDay(string)`

判斷是否為交易日

```javascript
isTradingDay('2019/12/21'); // false
```

#### `checkTradingDay(string)`

檢查是否為交易日

```javascript
checkTradingDay('2019/12/21');
/*
{
  isTradingDay: false,
  des: 'weekend'
}
*/
```

### Realtime

#### `getByStock(IStock)`

```javascript
  const realtimeData =
    await getByStock({code:'2330', type:'tse'});
  // or
  const stock = stockList.getByCode('2330');
  const realtimeData = await getByStock(stock);
```

#### `getByStocks(IStock[])`

```javascript
  const realtimeData = await getByStocks([
    {code:'2330', type:'tse'},
    {code:'3260', type:'otc'}
  ]);
```

## TODO

- [x] 上市櫃清單
- [x] 公司基本資料
- [x] 即時資料
- [ ] 歷史資料
- [ ] 分析
