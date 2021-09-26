import { Fab, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { MouseEventHandler } from 'react';

interface AddButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const MyFab = styled(Fab)(({ theme }) => ({
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
}));

const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <MyFab color="primary" onClick={onClick}>
      <AddIcon />
    </MyFab>
  );
};

export default AddButton;
