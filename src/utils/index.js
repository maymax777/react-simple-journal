import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import isYesterday from 'dayjs/plugin/isYesterday';
import isToday from 'dayjs/plugin/isToday';

const START_DATE = dayjs().format('YYYY-MM-DD');
dayjs.extend(dayOfYear);
dayjs.extend(isYesterday);
dayjs.extend(isToday);

export const getCalendar = () => {
  const today = dayjs().dayOfYear();
  return new Array(today)
    .fill(0)
    .map((_, index) =>
      dayjs(START_DATE)
        .dayOfYear(index + 1)
        .format('MMM DD'),
    )
    .reverse();
};

export const getToday = () => {
  return dayjs().format('MMM DD');
};

export const getCurrentDateTime = () => {
  return dayjs().format('YYYY-MM-DD hh:mm:ss A');
};

export const readJournalDataFromStorage = () => {
  let journalData = localStorage.getItem('journalData');
  if (!journalData) return [];
  journalData = JSON.parse(journalData);
  return journalData;
};

export const saveJournalDataToStorage = (data) => {
  const { selectedDate, content, emotion } = data;
  let journalData = localStorage.getItem('journalData');
  journalData = journalData ? JSON.parse(journalData) : {};
  journalData[selectedDate] = { content, emotion };
  localStorage.setItem('journalData', JSON.stringify(journalData));
};

export const formatDate = (date) => {
  if (date === dayjs().format('MMM DD')) return 'Today';
  if (date === dayjs().add(-1, 'day').format('MMM DD')) return 'Yesterday';
  return date;
};

export const getMonthYear = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${
    months.filter((month) => month.includes(date.split(' ')[0]))[0]
  } ${dayjs().year()}`;
};
