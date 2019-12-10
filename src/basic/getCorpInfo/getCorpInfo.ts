import axios from 'axios';
import jsdom from 'jsdom';
import queryString from 'query-string';
const { JSDOM } = jsdom;

interface ICorpInfo {
  code: string;
  classification: string;
  corpFullName: string;
  address: string;
  createdAt: Date;
  chairman: string;
}

function tryParseCorpInfo(document: Document): ICorpInfo | null {
  const notFoundElement = document.querySelector('body > center > h3');
  if (notFoundElement) {
    return null;
  }
  const codeElement = document.querySelector('table.hasBorder > tbody > tr:nth-child(1) > td:nth-child(2)') as Element;
  const classElement = document.querySelector('table.hasBorder > tbody > tr:nth-child(1) > td:nth-child(4)') as Element;
  const corpFullNameElement = document.querySelector(
    'table.hasBorder > tbody > tr:nth-child(2) > td:nth-child(2)',
  ) as Element;
  const addressElement = document.querySelector('table.hasBorder > tbody > tr:nth-child(3) > td') as Element;
  const createdAtElement = document.querySelector(
    'table.hasBorder > tbody > tr:nth-child(8) > td:nth-child(2)',
  ) as Element;
  const chairmanElement = document.querySelector(
    'table.hasBorder > tbody > tr:nth-child(4) > td:nth-child(2)',
  ) as Element;
  const code = codeElement.textContent!.trim();
  const classification = classElement.textContent!.trim();
  const corpFullName = corpFullNameElement.textContent!.trim();
  const address = addressElement.textContent!.trim();
  const createdYear = parseInt(createdAtElement.textContent!.split('/')[0], 10);
  const createdMonth = parseInt(createdAtElement.textContent!.split('/')[1], 10);
  const createdDay = parseInt(createdAtElement.textContent!.split('/')[1], 10);
  const createdAt = new Date(createdYear, createdMonth, createdDay);
  const chairman = chairmanElement.textContent!.trim();
  return { code, classification, corpFullName, address, createdAt, chairman };
}

export async function getCorpInfoByCode(stockCode: string): Promise<ICorpInfo | null> {
  const url = 'https://mops.twse.com.tw/mops/web/ajax_t05st03';
  const data = queryString.stringify({
    TYPEK: 'all',
    co_id: stockCode,
    encodeURIComponent: 1,
    firstin: 1,
    inpuType: 'co_id',
    off: 1,
    queryName: 'co_id',
    step: 1,
  });
  const res = await axios.post(url, data);
  const { document } = new JSDOM(res.data).window;
  return tryParseCorpInfo(document);
}
