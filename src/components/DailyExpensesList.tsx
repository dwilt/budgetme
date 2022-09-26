import { useDeleteEntry } from '../hooks/useDeleteEntry'
import { useDailyExpenses } from '../hooks/useDailyExpenses'
import { useDailyExpensesTotal } from '../hooks/useDailyExpensesTotal'
import { useGetDateFromQuery } from '../hooks/useGetDateFromQuery'
import { EntriesList } from './EntriesList'

export const DailyExpensesList = () => {
  const { deleteEntry } = useDeleteEntry()
  const { queryDate } = useGetDateFromQuery()
  const { data: dailyExpenses } = useDailyExpenses(queryDate)
  const { dailyEntriesTotal } = useDailyExpensesTotal(queryDate)

  if (!dailyEntriesTotal || !Array.isArray(dailyExpenses)) {
    return null
  }

  return (
    <EntriesList
      title="Daily Expenses"
      total={dailyEntriesTotal}
      entries={dailyExpenses}
      onDelete={deleteEntry}
    />
  )
}
