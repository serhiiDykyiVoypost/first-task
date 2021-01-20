import React from 'react';
import { Typography } from '@material-ui/core';

interface HedingProps {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'textPrimary' | 'default';
  className?: string;
  uppercase?: boolean;
  size?: 'large' | 'small' | 'medium' | undefined;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heding: React.FC<HedingProps> = props => {
  const { children, className, variant } = props;

  return (
    <Typography variant={variant} className={className}>
      {children}
    </Typography>
  );
};

export default Heding;
