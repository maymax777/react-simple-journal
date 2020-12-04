import { getCalendar, readJournalDataFromStorage } from '../../utils';

export default function useStoreManager() {
  const date = getCalendar();
  const data = readJournalDataFromStorage();
  return { date, data };
}
