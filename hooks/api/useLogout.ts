import { useMutation } from '@tanstack/react-query'
import { logout } from '../../api/auth/logout'
import { queryClient } from '../../utils/query'

export const useLogout = () => {
  return useMutation(async () => {
    await logout()
    queryClient.setQueryData(['current-user'], null)
  })
}
