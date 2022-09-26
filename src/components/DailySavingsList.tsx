import { useDeleteEntry } from '../hooks/useDeleteEntry'
import { useGetDateFromQuery } from '../hooks/useGetDateFromQuery'
import { EntriesList } from './EntriesList'
import { useDailySavings } from '../hooks/useDailySavings'
import { useDailySavingsTotal } from '../hooks/useDailySavingsTotal'

export const DailySavingsList = () => {
  const { deleteEntry } = useDeleteEntry()
  const { queryDate } = useGetDateFromQuery()
  const { data: dailySavings } = useDailySavings(queryDate)
  const { dailySavingsTotal } = useDailySavingsTotal(queryDate)

  if (!dailySavingsTotal || !Array.isArray(dailySavings)) {
    return null
  }

  return (
    <EntriesList
      title="Daily Savings"
      total={dailySavingsTotal}
      entries={dailySavings}
      onDelete={deleteEntry}
    />
  )
}
