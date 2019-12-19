import axios from 'axios';
import iconv from 'iconv-lite';
import jsdom from 'jsdom';
import { IStock } from '../interfaces/IStock';

const { JSDOM } = jsdom;
const url = 'http://isin.twse.com.tw/isin/C_public.jsp?strMode=4';

export async function getOtcList() {
  const res = await axios.get(url, {
    responseType: 'arraybuffer',
  });
  const html = iconv.decode(res.data, 'big5');
  const { document } = new JSDOM(html).window;
  const otcList: IStock[] = [];
  const selector = 'body > table.h4 > tbody > tr > td:nth-child(1):not([colspan="7"]):not([bgcolor="#D5FFD5"])';
  document.querySelectorAll(selector).forEach(e => {
    const stockArr = e.textContent!.trim().split('　');
    otcList.push({ code: stockArr[0].trim(), name: stockArr[1].trim().toLowerCase(), type: 'otc' });
  });
  return otcList;
}
