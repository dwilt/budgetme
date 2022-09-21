import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { createEntry, CreateEntryParams } from '../api/entry/createEntry'
import { queryClient } from '../utils/query'

export const useCreateEntry = (
  options?: Omit<
    UseMutationOptions<void, unknown, CreateEntryParams, unknown>,
    'mutationFn'
  >
) => {
  return useMutation(async (newEntry: CreateEntryParams) => {
    await createEntry(newEntry)
    queryClient.invalidateQueries(['entries'])
  }, options)
}
