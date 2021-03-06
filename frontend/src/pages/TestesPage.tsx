import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import eventosService from '../services/eventos';

const TestesPage = () => {
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
        <Box paddingTop="20px" paddingBottom="20px">
          <Typography variant="h4">Eventos</Typography>
        </Box>
        <Grid container spacing={4}>
          {eventos.map((evento: Evento) => (
            <Grid item xs={3}>
              <Paper elevation={4}>
                <Box
                  sx={{
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'background.paper',
                    cursor: 'pointer',
                    transition: '0.3s',
                    ':hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }}
                >
                  <Typography variant="h6">{evento.nome}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}

          <Grid item xs={3}>
            <Paper elevation={4}>
              <Box
                sx={{
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'background.paper',
                  cursor: 'pointer',
                  transition: '0.3s',
                  fontSize: 50,
                  ':hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <AddIcon fontSize="inherit" />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TestesPage;
