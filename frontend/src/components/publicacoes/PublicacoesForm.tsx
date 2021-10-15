import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import edicoesService from '../../services/edicoes';
import publicacoesService from '../../services/publicacoes';
import trilhasService from '../../services/trilhas';
import RFFAutocomplete from '../finalFormFields/RFFAutocomplete';
import RFFTextField from '../finalFormFields/RFFTextField';

interface PublicacoesFormProps {
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const PublicacoesForm = ({ setOpenForm }: PublicacoesFormProps) => {
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [edicoes, setEdicoes] = useState<Edicao[]>([]);

  const handleSubmit = async (publicacao: Publicacao) => {
    await publicacoesService.create(publicacao);
    setOpenForm(false);
  };

  useEffect(() => {
    const loadTrilhas = async () => {
      const trilhas = await trilhasService.find();
      setTrilhas(trilhas);
    };
    loadTrilhas();
  }, []);

  useEffect(() => {
    const loadEdicoes = async () => {
      const edicoes = await edicoesService.find();
      setEdicoes(edicoes);
    };
    loadEdicoes();
  }, []);

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <RFFTextField label="Título" name="titulo" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <RFFAutocomplete
                label="Trilha"
                name="trilhaId"
                options={trilhas}
                getOptionLabel={(trilha) => trilha.trilha}
                parseOption={(trilha) => trilha.id}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <RFFAutocomplete
                label="Edição"
                name="edicaoId"
                options={edicoes}
                getOptionLabel={(edicao) => edicao.edicao ?? ''}
                parseOption={(edicao) => edicao.id}
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

export default PublicacoesForm;
