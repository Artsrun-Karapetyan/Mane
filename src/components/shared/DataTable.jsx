import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Typography,
  Box,
} from '@mui/material'

const DataTable = ({
  columns = [],
  data = [],
  title,
  emptyMessage = 'No data available',
  rowsPerPageOptions = [5, 10, 25, 50],
  defaultRowsPerPage = 10,
  sx = {}
}) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage)

  if (!columns.length) {
    return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="body2" color="text.secondary">
          No columns defined
        </Typography>
      </Box>
    )
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  // Calculate paginated data
  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  const emptyRows = rowsPerPage - paginatedData.length

  return (
    <TableContainer component={Paper} sx={sx}>
      {title && (
        <Box sx={{ padding: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Box>
      )}
      <Table sx={{ minWidth: 650 }} aria-label="data table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || 'left'}
                sx={{ fontWeight: 'bold' }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center" sx={{ padding: 4 }}>
                <Typography variant="body2" color="text.secondary">
                  {emptyMessage}
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            <>
              {paginatedData.map((row, rowIndex) => (
                <TableRow
                  key={row.id || rowIndex}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align || 'left'}>
                      {column.render
                        ? column.render(row[column.id], row, rowIndex)
                        : row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={columns.length} />
                </TableRow>
              )}
            </>
          )}
        </TableBody>
      </Table>
      {data.length > 0 && (
        <TablePagination
          component="div"
          count={data.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
        />
      )}
    </TableContainer>
  )
}

export default DataTable

