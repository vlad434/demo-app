import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

type Props = {
  name: string;
  control: any;
  label: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
};

export const FormInputText: React.FC<Props> = ({
  name,
  control,
  label,
  type = "text",
  multiline = false,
  rows,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          multiline={multiline}
          rows={rows}
        />
      )}
    />
  );
};
