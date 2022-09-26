import { apiFetch } from '../utils'
import { Entry } from './types'

export type CreateEntryParams = Omit<Entry, 'id'>

export const createEntry = (params: CreateEntryParams): Promise<Entry> => {
  return apiFetch(`/entry`, {
    method: 'POST',
    body: JSON.stringify(params),
    credentials: 'include',
  })
}
