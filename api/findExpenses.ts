export interface FindExpensesParams {
  account_id: string | undefined
}

export const findExpenses = ({
  account_id,
}: FindExpensesParams): Promise<
  {
    id: number
    name: string
    account_id: number
    transaction_date: string
  }[]
> => {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/expense?account_id=${account_id}`
  ).then(async (res) => {
    const json = await res.json()
    if (!res.ok) {
      throw new Error(json.message)
    }

    return json
  })
}
