import isWeekend from './isWeekend';
import { checkHoliday, isHoliday } from './stockHoliday';

interface ITradingDay {
  isTradingDay: boolean;
  des: string;
}

async function isTradingDay(dateStr: string) {
  return !isWeekend(dateStr) && !(await isHoliday(dateStr));
}

async function checkTradingDay(dateStr: string) {
  if (isWeekend(dateStr)) {
    return { isTradingDay: false, des: 'Weekend' } as ITradingDay;
  } else {
    const holiday = await checkHoliday(dateStr);
    if (holiday.isHoliday) {
      return { isTradingDay: false, des: holiday.des } as ITradingDay;
    } else {
      return { isTradingDay: true, des: '' } as ITradingDay;
    }
  }
}

export { isTradingDay, checkTradingDay };
