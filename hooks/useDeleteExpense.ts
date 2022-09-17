import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import {
  deleteExpense,
  DeleteExpenseParams,
} from '../api/expense/deleteExpense'
import { queryClient } from '../utils/query'

export const useDeleteExpense = (
  options?: Omit<
    UseMutationOptions<void, unknown, DeleteExpenseParams, unknown>,
    'mutationFn'
  >
) => {
  return useMutation(async (expense: DeleteExpenseParams) => {
    await deleteExpense(expense)
    queryClient.invalidateQueries(['expenses'])
  }, options)
}
