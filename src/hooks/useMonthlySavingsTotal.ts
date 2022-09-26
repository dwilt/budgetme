import { useMonthlyEntriesTotal } from './useMonthlyEntriesTotal'

export const useMonthlySavingsTotal = (date?: Date) => {
  const { monthlyEntriesTotal } = useMonthlyEntriesTotal(date, 'savings')

  return { monthlySavingsTotal: monthlyEntriesTotal }
}
