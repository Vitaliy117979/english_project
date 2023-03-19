
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

import Button from '@mui/material/Button';

export  function Modal({children}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = (e) => {
    if(e.target === e.currentTarget){

      setOpen(false);
    }
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleToggle}>Add word</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {children}
      </Backdrop>
    </div>
  );
}
