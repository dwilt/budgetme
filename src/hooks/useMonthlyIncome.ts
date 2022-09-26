import { useMonthlyEntries } from './useMonthlyEntries'

export const useMonthlyIncome = (date?: Date) => {
  return useMonthlyEntries(date, {
    type: 'income',
  })
}
