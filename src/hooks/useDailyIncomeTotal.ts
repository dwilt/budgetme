import { getEntriesTotal } from '../utils/entries'
import { useDailyIncome } from './useDailyIncome'

export const useDailyIncomeTotal = (date?: Date) => {
  const { data: dailyIncome } = useDailyIncome(date)
  const dailyIncomeTotal = getEntriesTotal(dailyIncome)

  return { dailyIncomeTotal }
}
