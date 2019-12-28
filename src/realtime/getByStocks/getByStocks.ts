import axios from 'axios';
import { IStock } from '../../interfaces';
import { IRealtimeData } from '../interfaces';

function generateUrl(stocks: IStock[]) {
  const now = Date.now();
  const exCh = stocks.map(stock => `${stock.type}_${stock.code}.tw`).join('|');
  const url = `http://163.29.17.179/stock/api/getStockInfo.jsp?ex_ch=${exCh}&json=1&delay=0&_=${now}`;

  return url;
}

function parseData(data: any): IRealtimeData {
  const change = +data.z - +data.y;
  const percentChange = Math.round((change / +data.y) * 100 * 100) / 100;
  const bestBidPrice = data.b
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  const bestBidVolume = data.g
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  const bestAskPrice = data.a
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  const bestAskVolume = data.f
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);

  return {
    bestAskPrice,
    bestAskVolume,
    bestBidPrice,
    bestBidVolume,
    change,
    code: data.c,
    dateTime: new Date(+data.tlong),
    high: +data.h,
    low: +data.l,
    name: data.n,
    open: +data.o,
    percentChange,
    prevClose: +data.y,
    price: +data.z,
    volume: +data.v,
  };
}

export async function getByStocks(stocks: IStock[]) {
  const url = generateUrl(stocks);
  const res = await axios.get(url);
  const realtimeData: any[] = res.data.msgArray;

  return realtimeData.map(parseData);
}
