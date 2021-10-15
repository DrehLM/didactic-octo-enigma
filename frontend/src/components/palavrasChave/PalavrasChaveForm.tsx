import { Button, Grid } from '@mui/material';
import React from 'react';
import { Form } from 'react-final-form';
import palavrasChaveService from '../../services/palavrasChave';
import RFFTextField from '../finalFormFields/RFFTextField';

interface PalavrasChaveFormProps {
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const PalavrasChaveForm = ({ setOpenForm }: PalavrasChaveFormProps) => {
  const handleSubmit = async (palavraChave: PalavraChave) => {
    await palavrasChaveService.create(palavraChave);
    setOpenForm(false);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <RFFTextField
                label="Palavra-chave"
                name="palavraChave"
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

export default PalavrasChaveForm;
