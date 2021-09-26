import { Field } from 'react-final-form';
import { TextField, TextFieldProps } from '@mui/material';

const RFFTextField = ({ name, ...rest }: TextFieldProps) => {
  <Field name={name}>{(props) => <TextField name={name} />}</Field>;
};
