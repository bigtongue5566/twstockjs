import ava from 'ava';
import isWeekend from './isWeekend';

ava('test isWeekend', t => {
  // arrange
  const weekendDateCase1 = '2019-9-28';
  const weekendDateCase2 = '2019/9/29';
  const notWeekendDateCase1 = '2019-9-30';
  const notWeekendDateCase2 = '2019/10/1';
  const invalidDateCase = '0124aa-13-50';
  // act
  const weekendDateCase1Result = isWeekend(weekendDateCase1);
  const weekendDateCase2Result = isWeekend(weekendDateCase2);
  const notWeekendDateCase1Result = isWeekend(notWeekendDateCase1);
  const notWeekendDateCase2Result = isWeekend(notWeekendDateCase2);

  // assert
  t.true(weekendDateCase1Result);
  t.true(weekendDateCase2Result);
  t.false(notWeekendDateCase1Result);
  t.false(notWeekendDateCase2Result);
  t.throws(
    () => {
      isWeekend(invalidDateCase);
    },
    { instanceOf: Error, message: 'invalid string' },
  );
});
