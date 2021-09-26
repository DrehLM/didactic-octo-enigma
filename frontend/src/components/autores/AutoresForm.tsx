import { Button, Grid } from '@mui/material';
import React from 'react';
import { Form } from 'react-final-form';
import autoresService from '../../services/autores';
import RFFTextField from '../finalFormFields/RFFTextField';

interface AutoresFormProps {
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AutoresForm = ({ setOpenForm }: AutoresFormProps) => {
  const handleSubmit = async (autor: Autor) => {
    await autoresService.create(autor);
    setOpenForm(false);
  };
  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={8}>
              <RFFTextField label="Nome" name="nome" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <RFFTextField label="Gênero" name="genero" fullWidth />
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

export default AutoresForm;
