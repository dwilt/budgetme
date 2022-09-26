import { Typography } from '@mui/material'
import Image from 'next/image'
import { useFindEntries } from '../hooks/useFindEntries'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

export const Header = () => {
  const { query } = useRouter()
  const queryDateString =
    typeof query.date === 'string' ? query.date : undefined
  const queryDate = queryDateString
    ? new Date(queryDateString.replaceAll('+', ' '))
    : undefined

  const { user } = useUser()

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
      account_id: user?.sub,
      transaction_date_end,
      transaction_date_start,
      recurring: false,
      type: 'expense',
    },
    {
      enabled: !!(user?.sub && queryDate),
    }
  )

  const { data: recurringEntries } = useFindEntries(
    {
      account_id: user?.sub,
      recurring: true,
      type: 'expense',
    },
    {
      enabled: !!(user?.sub && queryDate),
    }
  )

  const monthlyEntriesTotal =
    monthlyExpenses && recurringEntries
      ? [...recurringEntries, ...monthlyExpenses].reduce(
          (acc, { amount }) => acc + amount,
          0
        ) / 100
      : 0

  return (
    <header>
      {!!user?.name && !!user?.picture && (
        <Link href="/api/auth/logout">
          <a>
            <Image alt={user.name} src={user.picture} width={40} height={40} />
          </a>
        </Link>
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
