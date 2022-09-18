import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { findExpenses, FindExpensesParams } from '../api/expense/findExpenses'
import { Expense } from '../api/expense/types'

export const useFindExpenses = (
  { account_id, ...rest }: Partial<FindExpensesParams>,
  options?: Omit<
    UseQueryOptions<
      Expense[] | undefined,
      unknown,
      Expense[] | undefined,
      (
        | string
        | {
            id?: number | undefined
            name?: string | undefined
            transaction_date?: string | undefined
            amount?: number | undefined
            recurring?: boolean | undefined
            account_id: number | undefined
          }
      )[]
    >,
    'queryKey' | 'queryFn' | 'initialData'
  > & {
    initialData?: () => undefined
  }
) => {
  return useQuery(
    ['expenses', { account_id, ...rest }],
    () => (account_id ? findExpenses({ account_id, ...rest }) : undefined),
    options
  )
}
