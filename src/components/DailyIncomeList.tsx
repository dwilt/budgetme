import { useDeleteEntry } from '../hooks/useDeleteEntry'
import { useGetDateFromQuery } from '../hooks/useGetDateFromQuery'
import { EntriesList } from './EntriesList'
import { useDailyIncome } from '../hooks/useDailyIncome'
import { useDailyIncomeTotal } from '../hooks/useDailyIncomeTotal'

export const DailyIncomeList = () => {
  const { deleteEntry } = useDeleteEntry()
  const { queryDate } = useGetDateFromQuery()
  const { data: dailyIncome } = useDailyIncome(queryDate)
  const { dailyIncomeTotal } = useDailyIncomeTotal(queryDate)

  if (!dailyIncomeTotal || !Array.isArray(dailyIncome)) {
    return null
  }

  return (
    <EntriesList
      title="Daily Income"
      total={dailyIncomeTotal}
      entries={dailyIncome}
      onDelete={deleteEntry}
    />
  )
}
