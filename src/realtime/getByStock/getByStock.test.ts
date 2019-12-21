import test from 'ava';
import { getByStock } from './getByStock';

test('get 2330 realtime data', async t => {
  const realtimeData = await getByStock({code:'2330',type:'tse'});
  t.is(realtimeData?.name, '台積電');
});

test('get 3260 realtime data', async t => {
  const realtimeData = await getByStock({code:'3260', type:'otc'});
  t.is(realtimeData?.name, '威剛');
});

test('code 233330 will find no data', async t => {
  const realtimeData = await getByStock({code:'233330', type:'tse'});
  t.is(realtimeData, null);
});

test('correct code 2330 but wrong type will find no data', async t => {
  const realtimeData = await getByStock({code:'2330', type:'otc'});
  t.is(realtimeData, null);
});
