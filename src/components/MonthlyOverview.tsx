import { Typography } from '@mui/material'
import { useMemo } from 'react'
import { useDailyAvailableSpendForMonth } from '../hooks/useDailyAvailableSpend'
import { useGetDateFromQuery } from '../hooks/useGetDateFromQuery'
import { isNumber } from '../utils/lang'

export const MonthlyOverview = () => {
  const { queryDate } = useGetDateFromQuery()
  const queryDateYear = useMemo(() => queryDate?.getFullYear(), [queryDate])
  const queryDateMonth = useMemo(() => queryDate?.getMonth(), [queryDate])
  const monthlyDate = useMemo(
    () =>
      isNumber(queryDateYear) && isNumber(queryDateMonth)
        ? new Date(queryDateYear, queryDateMonth)
        : undefined,
    [queryDateMonth, queryDateYear]
  )
  const { dailyAvailableSpend } = useDailyAvailableSpendForMonth(monthlyDate)

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
