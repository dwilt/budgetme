import { Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'
import { useMonthlyExpensesTotal } from '../hooks/useMonthlyExpensesTotal'
import { useGetDateFromQuery } from '../hooks/useGetDateFromQuery'

export const Header = () => {
  const { queryDate } = useGetDateFromQuery()
  const { user } = useUser()
  const { monthlyExpensesTotal } = useMonthlyExpensesTotal(queryDate)

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
        }).format(monthlyExpensesTotal || 0)}
      </Typography>
    </header>
  )
}
