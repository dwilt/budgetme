import { useMonthlyExpenses } from './useMonthlyExpenses'
import { useRecurringExpenses } from './useRecurringExpenses'

export const useMonthlyExpensesTotal = (date?: Date) => {
  const { data: monthlyExpenses } = useMonthlyExpenses(date)
  const { data: recurringExpenses } = useRecurringExpenses()

  const monthlyExpensesTotal =
    monthlyExpenses && recurringExpenses
      ? [...recurringExpenses, ...monthlyExpenses].reduce(
          (acc, { amount }) => acc + amount,
          0
        ) / 100
      : undefined

  return { monthlyExpensesTotal }
}
