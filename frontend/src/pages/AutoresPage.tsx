import { Box, Container, Dialog, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddButton from '../components/AddButton';
import AutoresForm from '../components/autores/AutoresForm';
import AutoresList from '../components/autores/AutoresList';

const AutoresPage = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Box>
      <Container>
        <Box paddingTop="20px">
          <Typography variant="h4">Autores</Typography>
        </Box>
        <AutoresList />
      </Container>

      <AddButton onClick={() => setOpenForm(true)} />
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <AutoresForm onCancel={() => setOpenForm(false)} />
      </Dialog>
    </Box>
  );
};

export default AutoresPage;
