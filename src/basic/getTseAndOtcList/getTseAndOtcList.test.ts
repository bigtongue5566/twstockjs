import test from 'ava';
import { getTseAndOtcList } from './getTseAndOtcList';

test('get Tse and Otc List', async t => {
  const tseAndOtcList = await getTseAndOtcList();
  const tseStock = tseAndOtcList.find(e => e.name === '台積電');
  const otcStock = tseAndOtcList.find(e => e.name === '家登');
  t.truthy(tseAndOtcList);
  t.is(tseStock!.code, '2330');
  t.is(tseStock!.name, '台積電');
  t.is(tseStock!.type, 'tse');
  t.is(otcStock!.code, '3680');
  t.is(otcStock!.name, '家登');
  t.is(otcStock!.type, 'otc');
});
