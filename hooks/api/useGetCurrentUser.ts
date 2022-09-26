import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '../../api/user/getCurrentUser'

export const useGetCurrentUser = () => {
  return useQuery([`current-user`], () => getCurrentUser(), {
    refetchOnWindowFocus: true,
  })
}
