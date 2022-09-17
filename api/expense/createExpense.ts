import { Expense } from './types'

export type CreateExpenseParams = Omit<Expense, 'id'>

export const createExpense = (
  params: CreateExpenseParams
): Promise<Expense> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/expense`, {
    method: 'POST',
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
