import test from 'ava';
import { getByStocks } from './getByStocks';

test('get 2330 realtime data', async t => {
  const realtimeData = await getByStocks([{code:'2330',type:'tse'}]);
  t.is(realtimeData.length, 1);
  t.is(realtimeData[0].name, '台積電');
});

test('get 2330,0050 realtime data', async t => {
  const realtimeData = await getByStocks([{code:'2330', type:'tse'},{code:'0050',type:'tse'}]);
  t.is(realtimeData.length, 2);
  t.is(realtimeData[0].name, '台積電');
  t.is(realtimeData[1].name, '元大台灣50');
});

test('get 3260 realtime data', async t => {
  const realtimeData = await getByStocks([{code:'3260', type:'otc'}]);
  t.is(realtimeData.length, 1);
  t.is(realtimeData[0].name, '威剛');
});

test('code 233330 will find no data', async t => {
  const realtimeData = await getByStocks([{code:'233330', type:'tse'}]);
  t.is(realtimeData.length, 0);
});

test('correct code 2330 but wrong type will find no data', async t => {
  const realtimeData = await getByStocks([{code:'2330', type:'otc'}]);
  t.is(realtimeData.length, 0);
});
