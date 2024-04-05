import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
//   { field: 'name', headerName: 'Name', width: 150 },
//   { field: 'email', headerName: 'Email', width: 250 }
];

export default function Customers() {
  const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users') // Using JSONPlaceholder as an example AP
    .then(res => res.json())
    .then(json => setUsers(json))

  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users} 
        columns={columns}
      //  loading={loading}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </Box>
  );
}
