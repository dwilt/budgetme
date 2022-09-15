import { useQuery } from '@tanstack/react-query'
import { findExpenses, FindExpensesParams } from '../api/findExpenses'

export const useFindExpenses = ({
  account_id,
}: Partial<FindExpensesParams>) => {
  return useQuery(
    ['expenses', { account_id }],
    () => findExpenses({ account_id }),
    {
      enabled: !!account_id,
    }
  )
}
