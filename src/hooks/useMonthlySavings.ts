import { useMonthlyEntries } from './useMonthlyEntries'

export const useMonthlySavings = (date?: Date) => {
  return useMonthlyEntries(date, {
    type: 'savings',
  })
}
