import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddButton from '../components/AddButton';
import EdicoesForm from '../components/edicoes/EdicoesForm';
import EdicoesList from '../components/edicoes/EdicoesList';
import edicoesService from '../services/edicoes';

const EdicoesPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [edicoes, setEdicoes] = useState<Edicao[]>([]);

  useEffect(() => {
    if (!openForm) {
      const loadEventos = async () => {
        const response = await edicoesService.find();
        setEdicoes(response);
      };
      loadEventos();
    }
  }, [openForm]);

  return (
    <>
      <Container>
        <Box paddingTop="20px">
          <Typography variant="h4">Edições</Typography>
        </Box>
        <EdicoesList items={edicoes} />
      </Container>
      <AddButton onClick={() => setOpenForm(true)} />
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogContent>
          <EdicoesForm setOpenForm={setOpenForm} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EdicoesPage;
