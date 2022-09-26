import { Entry } from '../api/entry/types'
import { getEntriesTotal } from '../utils/entries'
import { useMonthlyEntries } from './useMonthlyEntries'

export const useMonthlyEntriesTotal = (date?: Date, type?: Entry['type']) => {
  const { data: monthlyEntries } = useMonthlyEntries(date, { type })
  const monthlyEntriesTotal = getEntriesTotal(monthlyEntries)

  return { monthlyEntriesTotal }
}
