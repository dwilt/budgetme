import { apiFetch } from '../utils'

export const logout = (): Promise<null> => {
  return apiFetch(`/auth/logout`, {
    credentials: 'include',
  })
}
