// src/components/CustomTextField.js

'use client';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import theme from './theme/theme';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CustomTextField = ({
  id,
  label,
  name,
  autoComplete,
  type = 'text',
  autoFocus = false,
  showPasswordToggle,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      type={type}
      InputProps={
        showPasswordToggle
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={`toggle ${label.toLowerCase()} visibility`}
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : undefined
      }
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'gray',
          },
          '&:hover fieldset': {
            borderColor: theme.palette.txtfieldcolor.main,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.txtfieldcolor.main,
          },
        },
        '& .MuiInputLabel-root': {
          '&:hover': {
            color: theme.palette.txtfieldcolor.main,
          },
          '&.Mui-focused': {
            color: theme.palette.txtfieldcolor.main,
          },
        },
      }}
    />
  );
};

export default CustomTextField;
