import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddButton from '../components/AddButton';
import InstituicoesForm from '../components/instituicoes/InstituicoesForm';
import InstituicoesList from '../components/instituicoes/InstituicoesList';
import instituicoesService from '../services/instituicoes';

const InstituicoesPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [instituicoes, setInstituicoes] = useState<Instituicao[]>([]);

  useEffect(() => {
    if (!openForm) {
      const loadInstituicoes = async () => {
        const response = await instituicoesService.find();
        setInstituicoes(response);
      };
      loadInstituicoes();
    }
  }, [openForm]);

  return (
    <>
      <Container>
        <Box paddingTop="20px">
          <Typography variant="h4">Instituições</Typography>
        </Box>
        <InstituicoesList items={instituicoes} />
      </Container>
      <AddButton onClick={() => setOpenForm(true)} />
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogContent>
          <InstituicoesForm setOpenForm={setOpenForm} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InstituicoesPage;
