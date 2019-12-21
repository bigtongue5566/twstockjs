import { ITradingDay } from './interface';
import isWeekend from './isWeekend';
import { checkHoliday, isHoliday } from './stockHoliday';

export async function isTradingDay(dateStr: string) {
  return !isWeekend(dateStr) && !(await isHoliday(dateStr));
}

export async function checkTradingDay(dateStr: string) {
  if (isWeekend(dateStr)) {
    return { isTradingDay: false, des: 'weekend' } as ITradingDay;
  } else {
    const holiday = await checkHoliday(dateStr);
    if (holiday.isHoliday) {
      return { isTradingDay: false, des: holiday.des } as ITradingDay;
    } else {
      return { isTradingDay: true, des: '' } as ITradingDay;
    }
  }
}
