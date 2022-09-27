import { Typography } from '@mui/material'
import { useDailyAvailableSpendForMonth } from '../hooks/useDailyAvailableSpend'
import { useGetDateFromQuery } from '../hooks/useGetDateFromQuery'

export const MonthlyOverview = () => {
  const { queryDate } = useGetDateFromQuery()
  const { dailyAvailableSpend } = useDailyAvailableSpendForMonth(queryDate)

  if (typeof dailyAvailableSpend !== 'number') {
    return null
  }

  return (
    <div>
      <Typography>
        Daily available spend:
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        }).format(dailyAvailableSpend)}
      </Typography>
    </div>
  )
}
