import test from 'ava';
import { checkHoliday, isHoliday } from './stockHoliday';

test('test isHoliday', async t => {
  // arrange
  const holidayDate = '2019-10-10';
  const tradingDayDate = '2019-9-27';
  const invalidDate = '2019//15////40';
  const noThisDate = '2020/10/10';
  // act
  const holidayResult = await isHoliday(holidayDate);
  const tradingDayResult = await isHoliday(tradingDayDate);
  // assert
  t.true(holidayResult);
  t.false(tradingDayResult);
  await t.throwsAsync(isHoliday(invalidDate), { instanceOf: Error, message: 'invalid string' });
  await t.throwsAsync(isHoliday(noThisDate), { instanceOf: Error, message: 'no this year stock holiday data' });
});

test('test checkHoliday', async t => {
  // arrange
  const holidayDate = '2019-10-10';
  const tradingDayDate = '2019-9-27';
  const invalidDate = 'aa140501';
  // act
  const holidayResult = await checkHoliday(holidayDate);
  const tradingDayResult = await checkHoliday(tradingDayDate);
  // assert
  t.true(holidayResult.isHoliday);
  t.true(holidayResult.des !== '');
  t.false(tradingDayResult.isHoliday);
  t.true(tradingDayResult.des === '');
  await t.throwsAsync(checkHoliday(invalidDate), { instanceOf: Error, message: 'invalid string' });
});
