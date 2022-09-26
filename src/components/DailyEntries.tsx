import { DailyExpensesList } from './DailyExpensesList'
import { DailyIncomeList } from './DailyIncomeList'
import { DailySavingsList } from './DailySavingsList'

export const DailyEntries = () => {
  return (
    <div>
      <DailyExpensesList />
      <hr />
      <DailyIncomeList />
      <hr />
      <DailySavingsList />
    </div>
  )
}
