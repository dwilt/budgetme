import { useRouter } from 'next/router'

export const useGetDateFromQuery = () => {
  const { query } = useRouter()
  const queryDateString =
    typeof query.date === 'string' ? query.date : undefined
  const queryDate = queryDateString ? new Date(queryDateString) : undefined

  return { queryDate }
}
