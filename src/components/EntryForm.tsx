import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { Controller, useForm } from 'react-hook-form'
import { Entry } from '../api/entry/types'
import { useCreateEntry } from '../hooks/useCreateEntry'
import AttachMoney from '@mui/icons-material/AttachMoney'
import { useGetDateFromQuery } from '../hooks/useGetDateFromQuery'

export const EntryForm = () => {
  const { queryDate } = useGetDateFromQuery()
  const { register, handleSubmit, reset, control } =
    useForm<Omit<Entry, 'id'>>()

  const { createEntry } = useCreateEntry({
    onSettled: () => {
      reset()
    },
  })

  return (
    <form
      onSubmit={handleSubmit(({ name, amount, recurring, type }) => {
        if (!queryDate) {
          return
        }

        createEntry({
          name,
          amount,
          transaction_date: queryDate.toISOString(),
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
