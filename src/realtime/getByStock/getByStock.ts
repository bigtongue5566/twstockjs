import axios from 'axios';
import { IStock } from '../../interfaces';
import { generateUrl, parseData } from '../utils';

export async function getByStock(stock: IStock) {
  const url = generateUrl([stock]);
  const res = await axios.get(url);
  const realtimeData = res.data.msgArray[0];
  return realtimeData === undefined ? null : parseData(realtimeData);
}
