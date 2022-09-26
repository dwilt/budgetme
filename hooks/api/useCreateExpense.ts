import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import {
  createExpense,
  CreateExpenseParams,
} from '../../api/expense/createExpense'
import { queryClient } from '../../utils/query'

export const useCreateExpense = (
  options?: Omit<
    UseMutationOptions<void, unknown, CreateExpenseParams, unknown>,
    'mutationFn'
  >
) => {
  return useMutation(async (newExpense: CreateExpenseParams) => {
    await createExpense(newExpense)
    queryClient.invalidateQueries(['expenses'])
  }, options)
}
