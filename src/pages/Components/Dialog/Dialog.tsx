import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DeleteIcon from '@mui/icons-material/Delete';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import { UsersContext } from '@/context/UserContext';
import { useEffect } from 'react';

export default function AlertDialog(props:{name: string, key:string}) {
   
    const { open,deleteUser, handleClickOpen, handleClose } = React.useContext(UsersContext)
    
   


  return (
    <div>
      <IconButton  onClick={()=>handleClickOpen()}>
            <DeleteIcon />
    </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remover Colaborador"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {`Você tem certeza que quer remover ${props.name} do banco de dados? Essa ação não pode ser desfeita!`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCELAR</Button>
          <Button onClick={()=>deleteUser(props.key)} autoFocus>
            EXCLUIR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}