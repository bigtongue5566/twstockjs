import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
import axios from 'axios';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

interface Holiday {
  date: dayjs.Dayjs;
  des: string;
}

interface CheckHoliday {
  isHoliday: boolean;
  des: string;
}

async function getStockHolidays(year: number) {
  const url = 'https://www.twse.com.tw/holidaySchedule/holidaySchedule';
  const localYear = year - 1911;
  const res = await axios.get(url, {
    params: {
      queryYear: localYear,
      response: 'html',
    },
  });
  const dom = new JSDOM(res.data);
  const tableTitle = dom.window.document.querySelector('.box-cell > h2') as Element;
  const title = tableTitle.textContent as string
  const searchIndex = title.indexOf(localYear.toString());
  if (searchIndex === -1) {
    throw new Error('no this year stock holiday data');
  }
  const dateTd = dom.window.document.querySelectorAll('table > tbody > tr > td:nth-child(2)');
  const descTd = dom.window.document.querySelectorAll('table > tbody > tr > td:nth-child(4)');
  let holidays: Holiday[] = [];
  for (let i = 0; i < dateTd.length; i++) {
    const holiday = dateTd[i].innerHTML.split('<br>').map(e => {
      return {
        date: dayjs(`${year}年${e}`, 'YYYY年M月D日'),
        des: descTd[i].textContent,
      } as Holiday;
    });
    holidays = holidays.concat(holiday);
  }
  return holidays;
}

function findHoliday(day: dayjs.Dayjs, holidays: Holiday[]) {
  return holidays.find(e => e.date.isSame(day));
}

export async function isHoliday(date: string) {
  const queryDate = dayjs(date);
  if (!queryDate.isValid()) {
    throw new Error('invalid string');
  }
  const holidays = await getStockHolidays(queryDate.year());
  const holiday = findHoliday(queryDate, holidays);
  return !!holiday;
}
export async function checkHoliday(date: string) {
  const queryDate = dayjs(date);
  if (!queryDate.isValid()) {
    throw new Error('invalid string');
  }
  const holidays = await getStockHolidays(queryDate.year());
  const holiday = findHoliday(queryDate, holidays);
  if (holiday) {
    return {
      des: holiday.des,
      isHoliday: true, 
    } as CheckHoliday;
  } else {
    return {
      des: '',
      isHoliday: false,
    } as CheckHoliday;
  }
}
