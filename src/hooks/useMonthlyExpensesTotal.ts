import { useMonthlyEntriesTotal } from './useMonthlyEntriesTotal'

export const useMonthlyExpensesTotal = (date?: Date) => {
  const { monthlyEntriesTotal } = useMonthlyEntriesTotal(date, 'expense')

  return { monthlyExpensesTotal: monthlyEntriesTotal }
}
