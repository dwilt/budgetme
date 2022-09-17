import { Expense } from './types'

export type DeleteExpenseParams = Pick<Expense, 'id' | 'account_id'>

export const deleteExpense = (
  params: DeleteExpenseParams
): Promise<Expense> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/expense`, {
    method: 'DELETE',
    headers: {
      ['Content-Type']: 'application/json',
    },
    body: JSON.stringify(params),
    credentials: 'include',
  }).then(async (res) => {
    const json = await res.json()
    if (!res.ok) {
      throw new Error(json.message)
    }

    return json
  })
}
