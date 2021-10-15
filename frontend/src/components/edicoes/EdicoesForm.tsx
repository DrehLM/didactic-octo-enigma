import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import edicoesService from '../../services/edicoes';
import eventosService from '../../services/eventos';
import RFFAutocomplete from '../finalFormFields/RFFAutocomplete';
import RFFTextField from '../finalFormFields/RFFTextField';

interface EdicoesFormProps {
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const EdicoesForm = ({ setOpenForm }: EdicoesFormProps) => {
  const [eventos, setEventos] = useState<Evento[]>([]);

  const handleSubmit = async (edicao: Edicao) => {
    await edicoesService.create(edicao);
    setOpenForm(false);
  };

  useEffect(() => {
    const loadEventos = async () => {
      const eventos = await eventosService.find();
      setEventos(eventos);
    };
    loadEventos();
  }, []);

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={8}>
              <RFFTextField label="Edição" name="edicao" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <RFFTextField label="Ano" name="ano" fullWidth />
            </Grid>
            <Grid item xs={8}>
              <RFFTextField label="Modelo" name="modelo" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <RFFAutocomplete
                label="Evento"
                name="eventoId"
                options={eventos}
                getOptionLabel={(evento) => evento.nome}
                parseOption={(evento) => evento.id}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => setOpenForm(false)}
                  fullWidth
                >
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" fullWidth>
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default EdicoesForm;
