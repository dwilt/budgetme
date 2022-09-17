import { useQuery } from '@tanstack/react-query'
import { findExpenses, FindExpensesParams } from '../api/expense/findExpenses'

export const useFindExpenses = ({
  account_id,
  ...rest
}: Partial<FindExpensesParams>) => {
  return useQuery(
    ['expenses', { account_id, ...rest }],
    () => (account_id ? findExpenses({ account_id, ...rest }) : undefined),
    {
      enabled: !!account_id,
    }
  )
}
