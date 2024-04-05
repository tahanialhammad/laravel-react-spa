import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

export default function DataGridTable({rows,columns}) {
  return (
      <DataGrid
      rows={rows}
      columns={columns}
       />
  )
}
