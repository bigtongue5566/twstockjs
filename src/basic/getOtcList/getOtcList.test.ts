import test from 'ava';
import { getOtcList } from './getOtcList';

test('get Otc List', async t => {
  const otcList = await getOtcList();
  const stock = otcList.find(e => e.name === '家登');
  t.truthy(otcList);
  t.is(stock!.code, '3680');
  t.is(stock!.name, '家登');
  t.is(stock!.type, 'otc');
});
