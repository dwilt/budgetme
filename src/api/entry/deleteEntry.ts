import { apiFetch } from '../utils'
import { Entry } from './types'

export type DeleteEntryParams = Pick<Entry, 'id' | 'account_id'>

export const deleteEntry = (params: DeleteEntryParams): Promise<Entry> => {
  return apiFetch(`/entry`, {
    method: 'DELETE',
    body: JSON.stringify(params),
    credentials: 'include',
  })
}
