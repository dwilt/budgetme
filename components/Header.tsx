import { ButtonBase, Typography } from '@mui/material'
import Image from 'next/image'
import { useFindEntries } from '../hooks/useFindEntries'
import { useGetCurrentUser } from '../hooks/useGetCurrentUser'
import { useRouter } from 'next/router'
import { useLogout } from '../hooks/useLogout'

export const Header = () => {
  const { push, query } = useRouter()
  const queryDateString =
    typeof query.date === 'string' ? query.date : undefined
  const queryDate = queryDateString
    ? new Date(queryDateString.replaceAll('+', ' '))
    : undefined

  const { data: currentUser } = useGetCurrentUser()

  const transaction_date_start = queryDate
    ? new Date(queryDate.getFullYear(), queryDate.getMonth(), 1).toDateString()
    : undefined

  const transaction_date_end = queryDate
    ? new Date(
        queryDate.getFullYear(),
        queryDate.getMonth() + 1,
        0
      ).toDateString()
    : undefined

  const { data: monthlyExpenses } = useFindEntries(
    {
      account_id: currentUser?.id,
      transaction_date_end,
      transaction_date_start,
      recurring: false,
      type: 'expense',
    },
    {
      enabled: !!(currentUser?.id && queryDate),
    }
  )

  const { data: recurringEntries } = useFindEntries(
    {
      account_id: currentUser?.id,
      recurring: true,
      type: 'expense',
    },
    {
      enabled: !!(currentUser?.id && queryDate),
    }
  )

  const monthlyEntriesTotal =
    monthlyExpenses && recurringEntries
      ? [...recurringEntries, ...monthlyExpenses].reduce(
          (acc, { amount }) => acc + amount,
          0
        ) / 100
      : 0

  const logout = useLogout()

  return (
    <header>
      {currentUser && (
        <ButtonBase
          onClick={async () => {
            await logout.mutate()
            push('/login')
          }}
        >
          <Image
            alt={`${currentUser.first_name} ${currentUser.last_name}`}
            src={currentUser.avatar}
            width={40}
            height={40}
          />
        </ButtonBase>
      )}
      <Typography component="h1">
        Monthly total:{' '}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        }).format(monthlyEntriesTotal)}
      </Typography>
    </header>
  )
}
