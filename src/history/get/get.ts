import axios from 'axios';
import { IHistoryData } from '../interfaces';

function parseData(data: any): IHistoryData[] {
  if (data.stat !== 'OK') {
    throw new Error(data.stat);
  }
  return data.data.map((d: any[]) => {
    const dateArray = (d[0] as string).split('/').map(e => parseInt(e, 10));
    const date = new Date(`${dateArray[0] + 1911}/${dateArray[1]}/${dateArray[2]}`);
    const volume = parseInt((d[1] as string).replace(',', ''), 10);
    const turnover = parseInt((d[2] as string).replace(',', ''), 10);
    const open = parseFloat(d[3]);
    const high = parseFloat(d[4]);
    const low = parseFloat(d[5]);
    const close = parseFloat(d[6]);
    const change = parseFloat(d[7]);
    const numberOfTransactions = parseInt((d[8] as string).replace(',', ''), 10);
    return {
      change,
      close,
      date,
      high,
      low,
      numberOfTransactions,
      open,
      turnover,
      volume,
    } as IHistoryData;
  });
}

export async function get(stockNo: string, year: number, month: number, timeout: number = 5000) {
  const date = `${year}${month.toString().padStart(2, '0')}01`;
  const url = `http://www.twse.com.tw/exchangeReport/STOCK_DAY?stockNo=${stockNo}&date=${date}`;
  const res = await axios.get(url, { timeout });
  return parseData(res.data);
}

(async () => {
  await get('2330', 2018, 13);
})();
