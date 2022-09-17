import { stringify } from 'querystring'
import { Expense } from './types'

export type FindExpensesParams = Partial<Expense> & Pick<Expense, 'account_id'>

export const findExpenses = (
  params: FindExpensesParams
): Promise<Expense[]> => {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/expense?${stringify(params)}`,
    {
      credentials: 'include',
    }
  ).then(async (res) => {
    const json = await res.json()
    if (!res.ok) {
      throw new Error(json.message)
    }

    return json
  })
}
