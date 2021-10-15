import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddButton from '../components/AddButton';
import PublicacoesForm from '../components/publicacoes/PublicacoesForm';
import PublicacoesList from '../components/publicacoes/PublicacoesList';
import publicacoesService from '../services/publicacoes';

const PublicacoesPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [publicacoes, setPublicacoes] = useState<Publicacao[]>([]);

  useEffect(() => {
    if (!openForm) {
      const loadPublicacoes = async () => {
        const response = await publicacoesService.find();
        setPublicacoes(response);
      };
      loadPublicacoes();
    }
  }, [openForm]);

  return (
    <>
      <Container>
        <Box paddingTop="20px">
          <Typography variant="h4">Publicações</Typography>
        </Box>
        <PublicacoesList items={publicacoes} />
      </Container>
      <AddButton onClick={() => setOpenForm(true)} />
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogContent>
          <PublicacoesForm setOpenForm={setOpenForm} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PublicacoesPage;
