import { getEntriesTotal } from '../utils/entries'
import { useDailySavings } from './useDailySavings'

export const useDailySavingsTotal = (date?: Date) => {
  const { data: dailySavings } = useDailySavings(date)
  const dailySavingsTotal = getEntriesTotal(dailySavings)

  return { dailySavingsTotal }
}
