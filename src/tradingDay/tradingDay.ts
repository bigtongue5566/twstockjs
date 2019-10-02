import isWeekend from './isWeekend';
import { checkHoliday, isHoliday } from './stockHoliday';

interface TradingDay {
  isTradingDay: boolean;
  des: string;
}

async function isTradingDay(dateStr: string) {
  return !isWeekend(dateStr) && !(await isHoliday(dateStr));
}

async function checkTradingDay(dateStr: string) {
  if (isWeekend(dateStr)) {
    return { isTradingDay: false, des: 'Weekend' } as TradingDay;
  } else {
    const holiday = await checkHoliday(dateStr);
    if (holiday.isHoliday) {
      return { isTradingDay: false, des: holiday.des } as TradingDay;
    } else {
      return { isTradingDay: true, des: '' } as TradingDay;
    }
  }
}

export { isTradingDay, checkTradingDay };
