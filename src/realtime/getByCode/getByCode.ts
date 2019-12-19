import axios from 'axios';
import { IRealtimeData } from '../interfaces';
const DATA_NOT_FOUND = 'Data Not Found';

function isDataNotFound(message: string): boolean {
  return message === 'Information Data Not Found';
}

/**
 *
 *
 * @export
 * @param {string} code
 * 股票代碼
 * @param {('tse' | 'otc')} type
 * tse:上市 otc:上櫃
 * @returns {Promise<IRealtimeData>}
 */
export async function getByCode(code: string, type: 'tse' | 'otc'): Promise<IRealtimeData> {
  const now = Date.now();
  const url = `http://163.29.17.179/stock/api/getStockInfo.jsp?ex_ch=${type}_${code}.tw&json=1&delay=0&_=${now}`;
  const res = await axios.get(url);
  if (isDataNotFound(res.data?.rtmessage)) {
    throw Error(DATA_NOT_FOUND);
  }
  const realtimeData = res.data.msgArray[0]
  if (realtimeData === undefined) {
    throw Error(DATA_NOT_FOUND);
  }
  const change = +realtimeData.z - +realtimeData.y;
  const percentChange = Math.round((change / +realtimeData.y) * 100 * 100) / 100;
  const bestBidPrice = realtimeData.b
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  const bestBidVolume = realtimeData.g
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  const bestAskPrice = realtimeData.a
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  const bestAskVolume = realtimeData.f
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  return {
    bestAskPrice,
    bestAskVolume,
    bestBidPrice,
    bestBidVolume,
    change,
    code: realtimeData.c,
    dateTime: new Date(+realtimeData.tlong),
    high: +realtimeData.h,
    low: +realtimeData.l,
    name: realtimeData.n,
    open: +realtimeData.o,
    percentChange,
    prevClose: +realtimeData.y,
    price: +realtimeData.z,
    volume: +realtimeData.v,
  };
}
