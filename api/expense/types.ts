export interface Expense {
  id: number
  name: string
  account_id: number
  transaction_date: string
  amount: number
  recurring: boolean
}
