import { getOtcList } from '../getOtcList';
import { getTseList } from '../getTseList';

export async function getTseAndOtcList() {
  const tseList = await getTseList();
  const otcList = await getOtcList();
  return tseList.concat(otcList);
}
