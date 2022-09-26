import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'
import { useDeleteEntry } from '../hooks/useDeleteEntry'
import { useUser } from '@auth0/nextjs-auth0'
import { useDailyExpenses } from '../hooks/useDailyExpenses'
import { useDailyExpensesTotal } from '../hooks/useDailyExpensesTotal'
import { useGetDateFromQuery } from '../hooks/useGetDateFromQuery'

export const DailyEntries = () => {
  const { user } = useUser()
  const { queryDate } = useGetDateFromQuery()
  const { data: dailyExpenses } = useDailyExpenses(queryDate)
  const deleteEntry = useDeleteEntry()
  const { dailyEntriesTotal } = useDailyExpensesTotal(queryDate)

  return (
    <div>
      <Typography component="h1">
        Daily Total:{' '}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        }).format(dailyEntriesTotal || 0)}
      </Typography>
      <List>
        {dailyExpenses?.map((entry) => (
          <ListItem
            key={entry.id}
            secondaryAction={
              <IconButton
                onClick={() => {
                  if (!user?.sub) {
                    return
                  }
                  deleteEntry.mutate({
                    account_id: user.sub,
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
