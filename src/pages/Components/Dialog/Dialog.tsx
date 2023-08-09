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
import { useContext, useEffect } from 'react';

export default function AlertDialog(props:{name: string, id:string}) {
   
    const { open,deleteUser, handleClickOpen, name,handleClose } = useContext(UsersContext)
 

  return (
   <>
      <IconButton onClick={()=>handleClickOpen(props.id, props.name)}>
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
           {`Você tem certeza que quer remover ${name} do banco de dados? Essa ação não pode ser desfeita!`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCELAR</Button>
          <Button onClick={()=>deleteUser(props.id)} autoFocus>
            EXCLUIR
          </Button>
        </DialogActions>
      </Dialog>
   
          </>
  );
}