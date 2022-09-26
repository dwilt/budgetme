import { useUser } from '@auth0/nextjs-auth0'
import { useFindEntries } from './useFindEntries'

export const useRecurringExpenses = () => {
  const { user } = useUser()

  return useFindEntries(
    {
      account_id: user?.sub,
      recurring: true,
      type: 'expense',
    },
    {
      enabled: !!user?.sub,
    }
  )
}
