import { useDailyExpenses } from './useDailyExpenses'

export const useDailyExpensesTotal = (date?: Date) => {
  const { data: dailyExpenses } = useDailyExpenses(date)

  const dailyEntriesTotal = dailyExpenses
    ? dailyExpenses.reduce((acc, { amount }) => acc + amount, 0) / 100
    : undefined

  return { dailyEntriesTotal }
}
