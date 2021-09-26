import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import autoresService from '../services/autores';
import AddButton from '../components/AddButton';
import AutoresForm from '../components/autores/AutoresForm';
import AutoresList from '../components/autores/AutoresList';

const AutoresPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [autores, setAutores] = useState<Autor[]>([]);

  useEffect(() => {
    const loadAutores = async () => {
      const response = await autoresService.find();
      setAutores(response);
    };
    loadAutores();
  }, []);

  return (
    <>
      <Container>
        <Box paddingTop="20px">
          <Typography variant="h4">Autores</Typography>
        </Box>
        <AutoresList items={autores} />
      </Container>
      <AddButton onClick={() => setOpenForm(true)} />
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogContent>
          <AutoresForm setOpenForm={setOpenForm} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AutoresPage;
