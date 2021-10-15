import { Button, Grid } from '@mui/material';
import React from 'react';
import { Form } from 'react-final-form';
import instituicoesService from '../../services/instituicoes';
import RFFTextField from '../finalFormFields/RFFTextField';

interface InstituicoesFormProps {
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const InstituicoesForm = ({ setOpenForm }: InstituicoesFormProps) => {
  const handleSubmit = async (instituicao: Instituicao) => {
    await instituicoesService.create(instituicao);
    setOpenForm(false);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <RFFTextField label="Nome" name="nome" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <RFFTextField label="Sigla" name="sigla" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <RFFTextField label="Cidade" name="cidade" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <RFFTextField label="Estado" name="estado" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <RFFTextField label="País" name="pais" fullWidth />
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

export default InstituicoesForm;
