import { Box, Button } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import { Form } from 'react-final-form';
import RFFTextField from '../finalFormFields/RFFTextField';

interface AutoresFormProps {
  onCancel: MouseEventHandler<HTMLButtonElement>;
}

const AutoresForm = ({ onCancel }: AutoresFormProps) => {
  return (
    <div>
      <Form
        onSubmit={() => {
          alert('foi');
        }}
        render={() => (
          <form>
            <Box display="flex" flexDirection="column" padding={2}>
              <RFFTextField label="Nome" name="nome" />
              <Button variant="outlined" onClick={onCancel}>
                Cancelar
              </Button>
              <Button variant="contained">Adicionar</Button>
            </Box>
          </form>
        )}
      />
    </div>
  );
};

export default AutoresForm;
