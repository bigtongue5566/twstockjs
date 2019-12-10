import axios from 'axios';
import { IStock } from '../../basic/interfaces';
import { IRealTimeData } from '../interfaces';

export async function getByCode(stock: IStock): Promise<IRealTimeData> {
  const now = Date.now();
  const url = `http://163.29.17.179/stock/api/getStockInfo.jsp?ex_ch=${stock.type}_${stock.code}.tw&json=1&delay=0&_=${now}`;
  const res = await axios.get(url);
  const realTimeData = res.data.msgArray[0];
  const change = +realTimeData.z - +realTimeData.y;
  const percentChange = Math.round((change / +realTimeData.y) * 100 * 100) / 100;
  const bestBidPrice = realTimeData.b
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  const bestBidVolume = realTimeData.g
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  const bestAskPrice = realTimeData.a
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  const bestAskVolume = realTimeData.f
    .split('_')
    .slice(0, -1)
    .map((e: string) => +e);
  return {
    bestAskPrice,
    bestAskVolume,
    bestBidPrice,
    bestBidVolume,
    change,
    code: realTimeData.c,
    dateTime: new Date(+realTimeData.tlong),
    high: +realTimeData.h,
    low: +realTimeData.l,
    name: realTimeData.n,
    open: +realTimeData.o,
    percentChange,
    prevClose: +realTimeData.y,
    price: +realTimeData.z,
    volume: +realTimeData.v,
  };
}
