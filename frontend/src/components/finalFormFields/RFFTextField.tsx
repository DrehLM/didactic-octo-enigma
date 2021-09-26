import TextField, { TextFieldProps } from '@mui/material/TextField';
import React, { FocusEvent } from 'react';
import { FieldRenderProps } from 'react-final-form';
import Field from './Field';

export type RFFTextFieldProps = TextFieldProps & {
  name: string;
  label: string;
  fullWidth: boolean;
  placeholder?: string;
};

const handleOnBlur = (
  event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  callbacks: (Function | undefined)[]
) => {
  for (const callback of callbacks) {
    if (callback) {
      callback(event);
    }
  }
};

const RFFTextField = ({
  fullWidth,
  label,
  name,
  ...others
}: RFFTextFieldProps) => (
  <Field name={name}>
    {({
      input,
      meta,
      ...props
    }: FieldRenderProps<string, HTMLInputElement | HTMLTextAreaElement>) => (
      <TextField
        {...input}
        {...props}
        {...others}
        fullWidth={fullWidth}
        label={label}
        error={meta.touched && !!meta.error}
        helperText={meta.touched && meta.error}
        onBlur={(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          handleOnBlur(event, [input.onBlur, others.onBlur])
        }
      />
    )}
  </Field>
);

RFFTextField.defaultProps = {
  fullWidth: false,
  endAdornment: 'disabled',
  label: ''
};

export default RFFTextField;
