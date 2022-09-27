import { useUser } from '@auth0/nextjs-auth0'
import { useFindEntries, UseFindEntriesParams } from './useFindEntries'

export const useMonthlyEntries = (
  date?: Date,
  options?: UseFindEntriesParams
) => {
  const { user } = useUser()

  const transaction_date_start = date
    ? new Date(date.getFullYear(), date.getMonth(), 1).toDateString()
    : undefined

  const transaction_date_end = date
    ? new Date(date.getFullYear(), date.getMonth() + 1, 0).toDateString()
    : undefined

  return useFindEntries(
    {
      account_id: user?.sub,
      transaction_date_end,
      transaction_date_start,
      ...options,
    },
    {
      enabled: !!(user?.sub && date),
    }
  )
}
