# twstockjs

[![npm](https://img.shields.io/npm/v/twstockjs)](https://www.npmjs.com/package/twstockjs)
[![Travis (.org)](https://img.shields.io/travis/bigtongue5566/twstockjs)](https://travis-ci.org/bigtongue5566/twstockjs)
[![Coveralls github](https://img.shields.io/coveralls/github/bigtongue5566/twstockjs)](https://coveralls.io/github/bigtongue5566/twstockjs)
[![Gitter](https://img.shields.io/gitter/room/bigtongue5566/twstockjs)](https://gitter.im/twstockjs/community)

台股資料library

## Install

```bash
npm i twstockjs
```

## Usage

```javascript
const { Basic, TradingDay } = require('twstockjs');
```

```typescript
import { Basic, TradingDay } from 'twstockjs';
```

## API

### Basic

#### getTseList()

取得上市證券清單

return Pomise\<IStock[]\>

#### getOtcList()

取得上櫃證券清單

return Pomise\<IStock[]\>

#### getTseAndOtcList()

取得上市櫃證券清單

return Pomise\<IStock[]\>

### TradingDay

#### isTradingDay('yyyy-mm-dd')

判斷是否為交易日

return promise\<boolean\>

#### checkTradingDay('yyyy-mm-dd')

檢查是否為交易日

return promise\<ITradingDay\>

## TODO

- [x] 上市櫃清單

- [x] 公司基本資料

- [ ] 即時資料
