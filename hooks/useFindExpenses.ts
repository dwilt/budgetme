import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { findExpenses, FindExpensesParams } from '../api/expense/findExpenses'
import { Expense } from '../api/expense/types'

export const useFindExpenses = (
  { account_id, ...rest }: Partial<FindExpensesParams>,
  options: Omit<
    UseQueryOptions<Expense[]>,
    'queryKey' | 'queryFn' | 'initialData'
  >
) => {
  return useQuery(
    ['expenses', { account_id, ...rest }],
    () => (account_id ? findExpenses({ account_id, ...rest }) : undefined),
    options
  )
}
