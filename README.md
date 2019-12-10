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

#### `getTseList()`

取得上市證券清單

#### `getOtcList()`

取得上櫃證券清單

#### `getTseAndOtcList()`

取得上市櫃證券清單

#### `getCorpInfo(string)`

取得公司資料

```javascript
await Basic.getCorpInfo('2330');
await Basic.getCorpInfo('台積電');
await Basic.getCorpInfo('0050'); // null
```

#### `isTradingDay(string)`

判斷是否為交易日

#### `checkTradingDay(string)`

檢查是否為交易日

### Realtime

#### `getByStock(IStock)`

```javascript
  const realtimeData = await Realtime.getByStock({
    code: '2330',
    name: '台積電', // 可有可無
    type: 'tse',
  });
```

## TODO

- [x] 上市櫃清單

- [x] 公司基本資料

- [x] 即時資料
