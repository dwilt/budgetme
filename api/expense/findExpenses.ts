import { stringify } from 'querystring'
import { apiFetch } from '../utils'
import { Expense } from './types'

export type FindExpensesParams = Partial<Expense> & Pick<Expense, 'account_id'>

export const findExpenses = (
  params: FindExpensesParams
): Promise<Expense[]> => {
  return apiFetch(`/expense?${stringify(params)}`, {
    credentials: 'include',
  })
}
