export interface Entry {
  id: number
  name: string
  account_id: string
  transaction_date: string
  amount: number
  recurring: boolean
  type: 'expense' | 'income' | 'savings'
}
