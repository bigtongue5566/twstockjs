import test from 'ava';
import { getCorpInfoByCode } from './getCorpInfo';

test('get 2330 corpInfo', async t => {
  const stockInfo = await getCorpInfoByCode('2330');
  t.is(stockInfo!.code, '2330');
  t.is(stockInfo!.classification, '半導體業');
});

test('get 台積電 corpInfo', async t => {
  const stockInfo = await getCorpInfoByCode('2330');
  t.is(stockInfo!.code, '2330');
  t.is(stockInfo!.classification, '半導體業');
});

test('get 0050 corpInfo null', async t => {
  const stockInfo = await getCorpInfoByCode('0050');
  t.is(stockInfo, null);
});
