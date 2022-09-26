import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'
import { Entry } from '../api/entry/types'

export const EntriesList = ({
  title,
  total,
  entries,
  onDelete,
}: {
  title: string
  total: number
  entries: Entry[]
  onDelete: ((entry: Pick<Entry, 'id'>) => void) | undefined
}) => {
  return (
    <div>
      <Typography component="h1">
        {title}:{' '}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        }).format(total)}
      </Typography>
      <List>
        {entries?.map((entry) => (
          <ListItem
            key={entry.id}
            secondaryAction={
              onDelete && (
                <IconButton
                  onClick={() => onDelete(entry)}
                  edge="end"
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              )
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
