import { TextField } from '@mui/material';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import Field from './Field';

export type RFFTextFieldProps<Option, InputValue> = Omit<
  AutocompleteProps<Option, boolean, boolean, boolean>,
  'renderInput'
> & {
  name: string;
  label: string;
  fullWidth: boolean;
  placeholder?: string;
  parseOption: (value: string | Option | null) => string | InputValue | null;
};

function RFFAutocomplete<Option, InputValue>({
  fullWidth,
  label,
  name,
  options,
  parseOption,
  ...props
}: RFFTextFieldProps<Option, InputValue>) {
  return (
    <Field name={name}>
      {({
        input,
        meta,
        ...fieldProps
      }: FieldRenderProps<string, HTMLInputElement | HTMLTextAreaElement>) => (
        <Autocomplete
          {...props}
          options={options}
          onChange={(event, value) => {
            if (Array.isArray(value)) {
              value.forEach((v) => input.onChange(parseOption(v)));
            } else {
              input.onChange(parseOption(value));
            }
          }}
          renderInput={(autocompleteProps) => (
            <TextField
              {...input}
              {...fieldProps}
              {...autocompleteProps}
              label={label}
              error={Boolean(meta.touched && meta.error)}
              helperText={meta.touched && meta.error}
            />
          )}
        />
      )}
    </Field>
  );
}

RFFAutocomplete.defaultProps = {
  fullWidth: false,
  endAdornment: 'disabled',
  label: ''
};

export default RFFAutocomplete;
