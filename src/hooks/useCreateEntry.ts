import { useUser } from '@auth0/nextjs-auth0'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useCallback } from 'react'
import { createEntry, CreateEntryParams } from '../api/entry/createEntry'
import { queryClient } from '../utils/query'

export const useCreateEntry = (
  options?: Omit<
    UseMutationOptions<void, unknown, CreateEntryParams, unknown>,
    'mutationFn'
  >
) => {
  const { user } = useUser()

  const mutation = useMutation(async (newEntry: CreateEntryParams) => {
    await createEntry(newEntry)
    queryClient.invalidateQueries(['entries'])
  }, options)

  const _createEntry = useCallback(
    (entry: Omit<CreateEntryParams, 'account_id'>) => {
      if (!user?.sub) {
        return
      }

      mutation.mutate({
        account_id: user.sub,
        ...entry,
      })
    },
    [mutation, user?.sub]
  )

  return { createEntry: _createEntry }
}
