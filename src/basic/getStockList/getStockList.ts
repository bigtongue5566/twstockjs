import { StockList } from '../utils';
import { getOtcList } from './getOtcList';
import { getTseList } from './getTseList';

export async function getStockList(type: 'all' | 'tse' | 'otc' = 'all') {
  let stockList;
  switch (type) {
    case 'all': {
      stockList = new StockList();
      const tseList = await getTseList();
      const otcList = await getOtcList();
      stockList.push(...tseList);
      stockList.push(...otcList);
      break;
    }
    case 'tse': {
      stockList = await getTseList();
      break;
    }
    case 'otc': {
      stockList = await getOtcList();
      break;
    }
  }

  return stockList;
}
