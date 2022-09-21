import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { Entry } from '../api/entry/types'
import { useCreateEntry } from '../hooks/useCreateEntry'
import { useGetCurrentUser } from '../hooks/useGetCurrentUser'
import { AttachMoney } from '@mui/icons-material'
import { useRouter } from 'next/router'

export const EntryForm = () => {
  const { query } = useRouter()
  const queryDateString =
    typeof query.date === 'string' ? query.date : undefined

  const { register, handleSubmit, reset, control } =
    useForm<Omit<Entry, 'id'>>()
  const { data: currentUser } = useGetCurrentUser()

  const createEntry = useCreateEntry({
    onSettled: () => {
      reset()
    },
  })

  return (
    <form
      onSubmit={handleSubmit(({ name, amount, recurring, type }) => {
        if (!currentUser?.id || !queryDateString) {
          return
        }

        createEntry.mutate({
          name,
          amount,
          account_id: currentUser.id,
          transaction_date: new Date(queryDateString).toISOString(),
          recurring,
          type,
        })
      })}
    >
      <FormControl fullWidth sx={{ mb: 4 }}>
        <TextField label="Name" {...register('name')} />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <TextField
          label="Amount"
          {...register('amount')}
          type="number"
          inputProps={{
            step: '0.01',
          }}
          InputProps={{
            startAdornment: <AttachMoney />,
          }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <FormControlLabel
          control={<Checkbox {...register('recurring')} />}
          label="Recurring?"
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel id="entry-type-label">Entry type</InputLabel>
        <Controller
          name="type"
          defaultValue="expense"
          control={control}
          render={({ field }) => (
            <Select<Entry['type']>
              id="entry-type"
              labelId="entry-type-label"
              label="Entry type"
              {...field}
            >
              <MenuItem value={'expense'}>Expense</MenuItem>
              <MenuItem value={'income'}>Income</MenuItem>
              <MenuItem value={'savings'}>Savings</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  )
}
