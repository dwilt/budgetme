import { useMonthlyEntries } from './useMonthlyEntries'

export const useMonthlyExpenses = (date?: Date) => {
  return useMonthlyEntries(date, {
    type: 'expense',
  })
}
