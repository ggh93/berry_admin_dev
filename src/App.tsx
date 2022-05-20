import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const alertMe = () => {};
  return (
    <>
      <Stack>
        <Alert severity='error'>This is an error alert — check it out!</Alert>
      </Stack>
      <Button
        variant='contained'
        onClick={() => {
          alertMe();
        }}
      >
        123
      </Button>
    </>
  );
}
export default App;
