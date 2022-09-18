import { apiFetch } from '../utils'
import { Expense } from './types'

export type CreateExpenseParams = Omit<Expense, 'id'>

export const createExpense = (
  params: CreateExpenseParams
): Promise<Expense> => {
  return apiFetch(`/expense`, {
    method: 'POST',
    body: JSON.stringify(params),
    credentials: 'include',
  })
}
