import { apiFetch } from '../utils'
import { Expense } from './types'

export type DeleteExpenseParams = Pick<Expense, 'id' | 'account_id'>

export const deleteExpense = (
  params: DeleteExpenseParams
): Promise<Expense> => {
  return apiFetch(`/expense`, {
    method: 'DELETE',
    body: JSON.stringify(params),
    credentials: 'include',
  })
}
