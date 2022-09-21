import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { findEntries, FindEntriesParams } from '../api/entry/findEntry'
import { Entry } from '../api/entry/types'

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
    ['entries', { account_id, ...rest }],
    () => (account_id ? findEntries({ account_id, ...rest }) : undefined),
    options
  )
}
