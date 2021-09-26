import { Button, Grid } from '@mui/material';
import React from 'react';
import { Form } from 'react-final-form';
import RFFTextField from '../finalFormFields/RFFTextField';

const TagForm = () => {
  return (
    <div>
      <Form
        onSubmit={() => {
          alert('foi');
        }}
        render={() => (
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RFFTextField label="Tag" name="tag" />
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained">
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </div>
  );
};

export default TagForm;
