import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { useFindEntries } from '../hooks/useFindEntries'
import { useGetCurrentUser } from '../hooks/useGetCurrentUser'
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'
import { useDeleteEntry } from '../hooks/useDeleteEntry'
import { useRouter } from 'next/router'

export const DailyEntries = () => {
  const { query } = useRouter()
  const queryDateString =
    typeof query.date === 'string' ? query.date : undefined

  const { data: currentUser } = useGetCurrentUser()
  const { data: dailyEntries } = useFindEntries(
    {
      account_id: currentUser?.id,
      transaction_date: queryDateString,
    },
    {
      enabled: !!(currentUser?.id && queryDateString),
    }
  )

  const deleteEntry = useDeleteEntry()

  const dailyEntriesTotal = dailyEntries
    ? dailyEntries.reduce((acc, { amount }) => acc + amount, 0) / 100
    : 0

  if (!dailyEntries) {
    return null
  }

  return (
    <div>
      <Typography component="h1">
        Daily Total:{' '}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        }).format(dailyEntriesTotal)}
      </Typography>
      <List>
        {dailyEntries.map((entry) => (
          <ListItem
            key={entry.id}
            secondaryAction={
              <IconButton
                onClick={() => {
                  if (!currentUser) {
                    return
                  }
                  deleteEntry.mutate({
                    account_id: currentUser.id,
                    id: entry.id,
                  })
                }}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText
              primary={`${entry.name} - ${new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
              }).format(entry.amount / 100)}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
