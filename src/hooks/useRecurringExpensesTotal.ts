import { useRecurringExpenses } from './useRecurringExpenses'

export const useRecurringExpensesTotal = () => {
  const { data: recurringExpenses } = useRecurringExpenses()

  const recurringExpensesTotal = recurringExpenses
    ? recurringExpenses.reduce((acc, { amount }) => acc + amount, 0) / 100
    : undefined

  return { recurringExpensesTotal }
}
