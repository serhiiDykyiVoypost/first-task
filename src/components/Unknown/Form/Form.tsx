import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './useStyles';

interface FormProps {
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  size?: 'large' | 'small' | 'medium' | undefined;
  required?: boolean;
}

const Form: React.FC<FormProps> = props => {
  const {
    autoComplete,
    autoFocus,
    fullWidth,
    onClick,
    className,
    disabled,
    required,
  } = props;
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        required={required}
        onClick={onClick}
        id="filled-required"
        fullWidth={fullWidth}
        className={className}
        disabled={disabled}
      />
    </form>
  );
};
export default Form;
