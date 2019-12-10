import dayjs from 'dayjs';

export default function isWeekend(date: string) {
  const queryDate = dayjs(date);
  if (!queryDate.isValid()) {
    throw new Error('invalid string');
  }
  return dayjs(date).day() === 0 || dayjs(date).day() === 6;
}
