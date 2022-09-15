import { useQuery } from '@tanstack/react-query'
import { getUser } from '../api/getUser'

export const useGetUser = (id: string | undefined) => {
  return useQuery([`user`, { id }], () => (id ? getUser(id) : undefined), {
    enabled: !!id,
  })
}
