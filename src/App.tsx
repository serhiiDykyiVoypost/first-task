import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/common/theme';
import Button from './components/Unknown/Button';
import { GoogleIcon } from './components/Unknown/icons';
import Heding from './components/Unknown/Heading/Heading';
import Form from './components/Unknown/Form';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Heding variant="h1">Sign up to set your brand up for success</Heding>
      <div className="App">
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={() => null}
          startIcon={<GoogleIcon />}
        >
          Sing Up With Google
        </Button>
        <Form></Form>
      </div>
    </ThemeProvider>
  );
}

export default App;
