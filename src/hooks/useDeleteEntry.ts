import { useUser } from '@auth0/nextjs-auth0'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useCallback } from 'react'
import { deleteEntry, DeleteEntryParams } from '../api/entry/deleteEntry'
import { Entry } from '../api/entry/types'
import { queryClient } from '../utils/query'

export const useDeleteEntry = (
  options?: Omit<
    UseMutationOptions<void, unknown, DeleteEntryParams, unknown>,
    'mutationFn'
  >
) => {
  const { user } = useUser()

  const mutation = useMutation(async (entry: DeleteEntryParams) => {
    await deleteEntry(entry)
    queryClient.invalidateQueries(['entries'])
  }, options)

  const _deleteEntry = useCallback(
    ({ id }: Pick<Entry, 'id'>) => {
      if (!user?.sub) {
        return
      }

      mutation.mutate({
        account_id: user.sub,
        id,
      })
    },
    [mutation, user?.sub]
  )

  return { deleteEntry: _deleteEntry }
}
