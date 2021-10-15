import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddButton from '../components/AddButton';
import PalavrasChaveForm from '../components/palavrasChave/PalavrasChaveForm';
import PalavrasChaveList from '../components/palavrasChave/PalavrasChaveList';
import palavrasChaveService from '../services/palavrasChave';

const PalavrasChavePage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [palavrasChave, setPalavrasChave] = useState<PalavraChave[]>([]);

  useEffect(() => {
    if (!openForm) {
      const loadPalavrasChave = async () => {
        const response = await palavrasChaveService.find();
        setPalavrasChave(response);
      };
      loadPalavrasChave();
    }
  }, [openForm]);

  return (
    <>
      <Container>
        <Box paddingTop="20px">
          <Typography variant="h4">Palavras-chave</Typography>
        </Box>
        <PalavrasChaveList items={palavrasChave} />
      </Container>
      <AddButton onClick={() => setOpenForm(true)} />
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogContent>
          <PalavrasChaveForm setOpenForm={setOpenForm} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PalavrasChavePage;
