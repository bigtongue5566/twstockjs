# twstockjs

![npm](https://img.shields.io/npm/v/twstockjs)
![Travis (.org)](https://img.shields.io/travis/bigtongue5566/twstockjs)
![Coveralls github](https://img.shields.io/coveralls/github/bigtongue5566/twstockjs)
![Gitter](https://img.shields.io/gitter/room/bigtongue5566/twstockjs)

台股資料library

## Install

```bash
npm i twstockjs
```

## Usage

```javascript
const {Basic,TradingDay} = require('twstockjs');
```

## API

### Basic

#### getTseList()

return Pomise\<IStock[]\>

#### getOtcList()

return Pomise\<IStock[]\>

#### getTseAndOtcList()

return Pomise\<IStock[]\>

### TradingDay

#### isTradingDay('yyyy-mm-dd')

return promise\<boolean\>

#### checkTradingDay('yyyy-mm-dd')

return promise\<ITradingDay\>

## Interface

### IStock

```
{
  // stock code
  code: string,
  // stock name
  name: string,
  // stock type 'tse' or 'otc'
  type: string
}
```

### ITradingDay

```
{
  // If the date is a Trading Day
  isTradingDay: boolean,
  // The description of the date
  des: string
}
```

## TODO

- [x] 上市櫃清單

- [ ] 公司基本資料

- [ ] 即時資料
