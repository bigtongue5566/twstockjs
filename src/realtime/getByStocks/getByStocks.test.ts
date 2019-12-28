import test from 'ava';
import { delay } from '../../utils';
import { getByStocks } from './getByStocks';

test.serial('get 2330 realtime data', async t => {
  await delay(1000);
  const realtimeData = await getByStocks([{ code: '2330', type: 'tse' }]);
  t.is(realtimeData.length, 1);
  t.is(realtimeData[0].name, '台積電');
});

test.serial('get 2330,0050 realtime data', async t => {
  await delay(1000);
  const realtimeData = await getByStocks([
    { code: '2330', type: 'tse' },
    { code: '0050', type: 'tse' },
  ]);
  t.is(realtimeData.length, 2);
  t.is(realtimeData[0].name, '台積電');
  t.is(realtimeData[1].name, '元大台灣50');
});

test.serial('get 3260 realtime data', async t => {
  await delay(1000);
  const realtimeData = await getByStocks([{ code: '3260', type: 'otc' }]);
  t.is(realtimeData.length, 1);
  t.is(realtimeData[0].name, '威剛');
});

test.serial('code 233330 will find no data', async t => {
  await delay(1000);
  const realtimeData = await getByStocks([{ code: '233330', type: 'tse' }]);
  t.is(realtimeData.length, 0);
});

test.serial('correct code 2330 but wrong type will find no data', async t => {
  await delay(1000);
  const realtimeData = await getByStocks([{ code: '2330', type: 'otc' }]);
  t.is(realtimeData.length, 0);
});
