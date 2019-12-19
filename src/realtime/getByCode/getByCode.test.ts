import test from 'ava';
import { getByCode } from './getByCode';

test('get 2330 realtime data', async t => {
  const realtimeData = await getByCode('2330','tse');
  t.is(realtimeData.name, '台積電');
});

test('get 0050 realtime data', async t => {
  const realtimeData = await getByCode('0050','tse');
  t.is(realtimeData.name, '元大台灣50');
});

test('get 3260 realtime data', async t => {
  const realtimeData = await getByCode('3260','otc');
  t.is(realtimeData.name, '威剛');
});

test('wrong type match code will fail', async t => {
  await t.throwsAsync(async () => {
		await getByCode('2330','otc');
	});
});

test('wrong code will fail', async t => {
  await t.throwsAsync(async () => {
		await getByCode('asfasf', 'tse');
	});
});
