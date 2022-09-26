import { useMonthlyEntriesTotal } from './useMonthlyEntriesTotal'

export const useMonthlyIncomeTotal = (date?: Date) => {
  const { monthlyEntriesTotal } = useMonthlyEntriesTotal(date, 'income')

  return { monthlyIncomeTotal: monthlyEntriesTotal }
}
