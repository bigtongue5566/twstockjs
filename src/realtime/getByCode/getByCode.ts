import axios from 'axios';
import { IStock } from '../../basic/interfaces';
import { IRealtimeData } from '../interfaces';

export async function getByCode(stock: IStock): Promise<IRealtimeData> {
  const now = Date.now();
  const url = `http://163.29.17.179/stock/api/getStockInfo.jsp?ex_ch=${stock.type}_${stock.code}.tw&json=1&delay=0&_=${now}`;
  const res = await axios.get(url);
  const realtimeData = res.data.msgArray[0];
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
