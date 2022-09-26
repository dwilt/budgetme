import { useQuery, UseQueryOptions } from '@tanstack/react-query'
<<<<<<<< HEAD:hooks/api/useFindExpenses.ts
import {
  findExpenses,
  FindExpensesParams,
} from '../../api/expense/findExpenses'
import { Entry } from '../../api/expense/types'
========
import { findEntries, FindEntriesParams } from '../api/entry/findEntry'
import { Entry } from '../api/entry/types'
>>>>>>>> main:hooks/useFindEntries.ts

export const useFindEntries = (
  { account_id, ...rest }: Partial<FindEntriesParams>,
  options?: Omit<
    UseQueryOptions<
      Entry[] | undefined,
      unknown,
      Entry[] | undefined,
      (
        | string
        | {
            id?: number | undefined
            name?: string | undefined
            transaction_date?: string | undefined
            amount?: number | undefined
            recurring?: boolean | undefined
            account_id: string | undefined | null
          }
      )[]
    >,
    'queryKey' | 'queryFn' | 'initialData'
  > & {
    initialData?: () => undefined
  }
) => {
  return useQuery(
    ['entries', { account_id, ...rest }],
    () => (account_id ? findEntries({ account_id, ...rest }) : undefined),
    options
  )
}
