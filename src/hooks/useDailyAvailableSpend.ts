import { isNumber } from '../utils/lang'
import { useMonthlyExpensesTotal } from './useMonthlyExpensesTotal'
import { useMonthlyIncomeTotal } from './useMonthlyIncomeTotal'
import { useMonthlySavingsTotal } from './useMonthlySavingsTotal'

export const useDailyAvailableSpendForMonth = (date?: Date) => {
  const { monthlyExpensesTotal } = useMonthlyExpensesTotal(date)
  const { monthlySavingsTotal } = useMonthlySavingsTotal(date)
  const { monthlyIncomeTotal } = useMonthlyIncomeTotal(date)
  const moneyLeftInMonth =
    isNumber(monthlyIncomeTotal) &&
    isNumber(monthlySavingsTotal) &&
    isNumber(monthlyExpensesTotal)
      ? monthlyIncomeTotal - monthlySavingsTotal - monthlyExpensesTotal
      : undefined

  const lastDayOfMonth = date
    ? new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    : undefined
  const daysUntilEndOfMonth =
    lastDayOfMonth && date ? lastDayOfMonth - date.getDate() : undefined

  const dailyAvailableSpend =
    moneyLeftInMonth && daysUntilEndOfMonth
      ? moneyLeftInMonth / daysUntilEndOfMonth
      : undefined

  return { dailyAvailableSpend }
}
