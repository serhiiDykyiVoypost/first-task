import React from 'react';
import ButtonBase from '@material-ui/core/Button';
import useStyles from './useStyles';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary' | 'default';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  uppercase?: boolean;
  size?: 'large' | 'small' | 'medium' | undefined;
  type?: 'button' | 'submit' | 'reset';
  startIcon?: object;
}

const Button: React.FC<ButtonProps> = props => {
  const classes = useStyles();

  const {
    children,
    color,
    variant,
    disabled,
    fullWidth,
    onClick,
    className,
    uppercase,
    size,
    type,
    startIcon,
  } = props;

  const uppercaseClasses = {
    root: uppercase ? classes.uppercase : '',
  };

  return (
    <ButtonBase
      variant={variant}
      color={color}
      disabled={disabled}
      className={className}
      onClick={onClick}
      fullWidth={fullWidth}
      size={size}
      type={type}
      classes={uppercaseClasses}
      startIcon={startIcon}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
