import { stringify } from 'querystring'
import { apiFetch } from '../utils'
import { Entry } from './types'

export type FindEntriesParams = Partial<Entry> &
  Pick<Entry, 'account_id'> & {
    transaction_date_end?: string
    transaction_date_start?: string
  }

export const findEntries = (params: FindEntriesParams): Promise<Entry[]> => {
  return apiFetch(`/entry?${stringify(params)}`, {
    credentials: 'include',
  })
}
