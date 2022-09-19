import { stringify } from 'querystring'
import { apiFetch } from '../utils'
import { Expense } from './types'

export type FindExpensesParams = Partial<Expense> &
  Pick<Expense, 'account_id'> & {
    transaction_date_end?: string
    transaction_date_start?: string
  }

export const findExpenses = (
  params: FindExpensesParams
): Promise<Expense[]> => {
  return apiFetch(`/expense?${stringify(params)}`, {
    credentials: 'include',
  })
}
