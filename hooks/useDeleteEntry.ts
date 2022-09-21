import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { deleteEntry, DeleteEntryParams } from '../api/entry/deleteEntry'
import { queryClient } from '../utils/query'

export const useDeleteEntry = (
  options?: Omit<
    UseMutationOptions<void, unknown, DeleteEntryParams, unknown>,
    'mutationFn'
  >
) => {
  return useMutation(async (entry: DeleteEntryParams) => {
    await deleteEntry(entry)
    queryClient.invalidateQueries(['entries'])
  }, options)
}
