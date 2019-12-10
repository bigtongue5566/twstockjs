import test from 'ava';
import { checkTradingDay, isTradingDay } from './tradingDay';

test('checkTradingDay test', async t => {
  // arrange
  const holidayDate = '2019-10-10';
  const weekendDate = '2019-9-14';
  const tradingDayDate = '2019-9-27';
  // act
  const holidayResult = await checkTradingDay(holidayDate);
  const weekendResult = await checkTradingDay(weekendDate);
  const tradingDayResult = await checkTradingDay(tradingDayDate);
  // assert
  t.false(holidayResult.isTradingDay);
  t.true(holidayResult.des !== '');
  t.false(weekendResult.isTradingDay);
  t.true(weekendResult.des !== '');
  t.true(tradingDayResult.isTradingDay);
  t.true(tradingDayResult.des === '');
});

test('isTradingDay test', async t => {
  // arrange
  const holidayDate = '2019-10-10';
  const weekendDate = '2019-9-14';
  const tradingDayDate = '2019-9-27';
  // act
  const holidayResult = await isTradingDay(holidayDate);
  const weekendResult = await isTradingDay(weekendDate);
  const tradingDayResult = await isTradingDay(tradingDayDate);
  // assert
  t.false(holidayResult);
  t.false(weekendResult);
  t.true(tradingDayResult);
});
