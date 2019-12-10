import test from 'ava';
import { getByCode } from './getByCode';

test('get 2330 realtime data', async t => {
  const realtimeData = await getByCode({
    code: '2330',
    name: '',
    type: 'tse',
  });
  t.is(realtimeData.name, '台積電');
});
