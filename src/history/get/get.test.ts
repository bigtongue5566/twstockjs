import test from 'ava';
import { get } from './get';

test('get 2330 2019/12 history data', async t => {
  const historyData = await get('2330', 2019, 12);
  t.is(historyData[0].date.getFullYear(), 2019);
  t.is(historyData[0].date.getMonth() + 1, 12);
});

test('fail to get long time ago data', async t => {
  await t.throwsAsync(
    async () => {
      await get('2330', 2050, 1);
    },
    { instanceOf: Error, message: '查詢日期大於今日，請重新查詢!' },
  );
});

test('fail to get future data', async t => {
  await t.throwsAsync(
    async () => {
      await get('2330', 2050, 1);
    },
    { instanceOf: Error, message: '查詢日期大於今日，請重新查詢!' },
  );
});
