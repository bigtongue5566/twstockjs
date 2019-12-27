import axios from 'axios';
import { IStock } from '../../interfaces';
import { generateUrl, parseData } from '../utils';

export async function getByStocks(stocks: IStock[]) {
  const url = generateUrl(stocks);
  const res = await axios.get(url);
  const realtimeData: any[] = res.data.msgArray;

  return realtimeData.map(parseData);
}
