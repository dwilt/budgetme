import { useUser } from '@auth0/nextjs-auth0'
import { useFindEntries } from './useFindEntries'

export const useDailySavings = (date?: Date) => {
  const { user } = useUser()

  const transaction_date = date?.toDateString()

  return useFindEntries(
    {
      account_id: user?.sub,
      transaction_date,
      type: 'savings',
    },
    {
      enabled: !!(user?.sub && transaction_date),
    }
  )
}
