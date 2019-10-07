import test from 'ava';
import { getTseList } from './getTseList';

test('get Tse List', async t => {
  const tseList = await getTseList();
  const stock = tseList.find(e => e.name === '台積電');
  t.truthy(tseList);
  if (stock) {
    t.is(stock.code, '2330');
    t.is(stock.name, '台積電');
    t.is(stock.type, 'tse');
  }
});
