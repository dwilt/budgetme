import { apiFetch } from '../utils'
import { User } from './types'

export const getCurrentUser = (): Promise<User> => {
  return apiFetch(`/user/current`, {
    credentials: 'include',
  })
}
