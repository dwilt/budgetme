import { getEntriesTotal } from '../utils/entries'
import { useRecurringExpenses } from './useRecurringExpenses'

export const useRecurringExpensesTotal = () => {
  const { data: recurringExpenses } = useRecurringExpenses()
  const recurringExpensesTotal = getEntriesTotal(recurringExpenses)

  return { recurringExpensesTotal }
}
