import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddButton from '../components/AddButton';
import EventosForm from '../components/eventos/EventosForm';
import EventosList from '../components/eventos/EventosList';
import eventosService from '../services/eventos';

const EventosPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    if (!openForm) {
      const loadEventos = async () => {
        const response = await eventosService.find();
        setEventos(response);
      };
      loadEventos();
    }
  }, [openForm]);

  return (
    <>
      <Container>
        <Box paddingTop="20px">
          <Typography variant="h4">Eventos</Typography>
        </Box>
        <EventosList items={eventos} />
      </Container>
      <AddButton onClick={() => setOpenForm(true)} />
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogContent>
          <EventosForm setOpenForm={setOpenForm} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventosPage;
