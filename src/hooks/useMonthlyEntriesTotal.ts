import { Entry } from '../api/entry/types'
import { useMonthlyEntries } from './useMonthlyEntries'

export const useMonthlyEntriesTotal = (date?: Date, type?: Entry['type']) => {
  const { data: monthlyEntries } = useMonthlyEntries(date, { type })

  const monthlyEntriesTotal = monthlyEntries
    ? monthlyEntries.reduce((acc, { amount }) => acc + amount, 0) / 100
    : undefined

  return { monthlyEntriesTotal }
}
