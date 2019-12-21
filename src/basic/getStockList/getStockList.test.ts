import test from 'ava';
import { getStockList } from './getStockList';

test('get all list', async t => {
  const stockList = await getStockList();
  const tseStock = stockList.getByCode('2330');
  const otcStock = stockList.getByCode('3680');
  t.truthy(stockList);
  t.is(tseStock!.code, '2330');
  t.is(tseStock!.name, '台積電');
  t.is(tseStock!.type, 'tse');
  t.is(otcStock!.code, '3680');
  t.is(otcStock!.name, '家登');
  t.is(otcStock!.type, 'otc');
});

test('get tse list', async t => {
  const tseStockList = await getStockList('tse');
  const tseStock = tseStockList.getByCode('2330');
  t.truthy(tseStock);
  t.is(tseStock!.code, '2330');
  t.is(tseStock!.name, '台積電');
  t.is(tseStock!.type, 'tse');
});

test('get otc list', async t => {
  const otcStockList = await getStockList('otc');
  const otcStock = otcStockList.getByCode('3680');
  t.truthy(otcStock);
  t.is(otcStock!.code, '3680');
  t.is(otcStock!.name, '家登');
  t.is(otcStock!.type, 'otc');
});
