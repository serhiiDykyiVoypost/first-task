import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/common/theme';
import Button from './components/Unknown/Button';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color="primary" size="large" onClick={() => null}>
          Sing Up With Google
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
