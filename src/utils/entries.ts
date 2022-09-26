import { Entry } from '../api/entry/types'

export const getEntriesTotal = (entries: Entry[] | undefined) =>
  entries
    ? entries.reduce((acc, { amount }) => acc + amount, 0) / 100
    : undefined
