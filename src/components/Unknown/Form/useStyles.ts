import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '550px',
      height: '50px',
    },
    '& .MuiInputBase-root': {
      borderRadius: '6px',
      background: '#EFEFEF',
    },
  },
}));

export default useStyles;
