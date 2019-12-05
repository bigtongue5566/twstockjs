import test from 'ava';
import { getStockInfoByCode } from './getStockInfoByCode';

test('get 2330 stockInfo', async t => {
  const stockInfo = await getStockInfoByCode('2330');
  t.is(stockInfo!.code, '2330');
  t.is(stockInfo!.classification, '半導體業');
});

test('get 台積電 stockInfo', async t => {
  const stockInfo = await getStockInfoByCode('2330');
  t.is(stockInfo!.code, '2330');
  t.is(stockInfo!.classification, '半導體業');
});

test('get 0050 null', async t => {
  const stockInfo = await getStockInfoByCode('0050');
  t.is(stockInfo, null);
});
