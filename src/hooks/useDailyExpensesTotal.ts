import { getEntriesTotal } from '../utils/entries'
import { useDailyExpenses } from './useDailyExpenses'

export const useDailyExpensesTotal = (date?: Date) => {
  const { data: dailyExpenses } = useDailyExpenses(date)
  const dailyEntriesTotal = getEntriesTotal(dailyExpenses)

  return { dailyEntriesTotal }
}
