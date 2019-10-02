# twstockjs

[![Join the chat at https://gitter.im/twstockjs/community](https://badges.gitter.im/twstockjs/community.svg)](https://gitter.im/twstockjs/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

台股資料library

## Install

```bash
npm i twstockjs
```

## Usage

```javascript
const twstockjs = require('twstockjs');
```

## API

### isTradingDay('yyyy-mm-dd')

return promise\<boolean\>

### checkTradingDay('yyyy-mm-dd')

return promise\<TradingDay\>

#### TradingDay

```javascript
{
  isTradingDay: boolean,
  // The description of the date which isTradingDay is false
  des: string
}
```

## TODO

- [ ] 上市櫃清單

- [ ] 公司基本資料
