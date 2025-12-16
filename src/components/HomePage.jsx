import { useState } from 'react'
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Stack, CircularProgress } from '@mui/material'

import { useGetUsers } from './queries'
import { useAppStore } from '../stores/useAppStore'
import DataTable from './shared/DataTable'

export default function HomePage() {
  const [open, setOpen] = useState(false)
  const { data, isLoading, error } = useGetUsers()
  
  // Use Zustand store
  const { count, name, increment, decrement, setCount, setName } = useAppStore()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome Mane!
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 3 }}>
        Click the button below to see a message.
      </Typography>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Modal
      </Button>
      
      {/* Display Zustand store values */}
      <Box sx={{ marginBottom: 3, padding: 2, backgroundColor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h6" gutterBottom>
          Store Values
        </Typography>
        <Typography variant="body1" gutterBottom>
          Name: <strong>{name}</strong>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Count: <strong>{count}</strong>
        </Typography>
        
        <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
          <Button variant="outlined" onClick={increment}>
            Increment
          </Button>
          <Button variant="outlined" onClick={decrement}>
            Decrement
          </Button>
          <Button variant="outlined" onClick={() => setCount(0)}>
            Reset Count
          </Button>
        </Stack>
      </Box>

      {/* DataTable Example */}
      <Box sx={{ marginTop: 4, marginBottom: 3 }}>
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography variant="body2" color="error" sx={{ padding: 2 }}>
            Error loading data: {error.message}
          </Typography>
        ) : (
          <DataTable
            title="Users Table"
            columns={[
              { id: 'id', label: 'ID' },
              { id: 'name', label: 'Name' },
              { id: 'email', label: 'Email' },
              {
                id: 'status',
                label: 'Status',
                align: 'center',
                render: (value) => (
                  <Typography
                    variant="body2"
                    sx={{
                      color: value === 'active' ? 'success.main' : 'text.secondary',
                      fontWeight: 'medium',
                    }}
                  >
                    {value || 'N/A'}
                  </Typography>
                ),
              },
            ]}
            data={data || []}
            emptyMessage="No users found"
            sx={{ marginTop: 2 }}
          />
        )}
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          Welcome Message
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Hi {name}, start your programming journey.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

