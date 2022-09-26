import { useUser } from '@auth0/nextjs-auth0'
import { useFindEntries } from './useFindEntries'

export const useMonthlyExpenses = (date?: Date) => {
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
      recurring: false,
      type: 'expense',
    },
    {
      enabled: !!user?.sub,
    }
  )
}
