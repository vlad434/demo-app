import React from "react";
import { TextField } from "@mui/material";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  multiline?: boolean;
  rows?: number;
};

export const FormInputText: React.FC<Props> = ({
  label,
  registration,
  error,
  type = "text",
  multiline = false,
  rows,
}) => {
  return (
    <TextField
      label={label}
      type={type}
      multiline={multiline}
      rows={rows}
      {...registration}
      error={!!error}
      helperText={error?.message}
    />
  );
};
