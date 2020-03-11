import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



class Tables extends Component{
  
    render(){
        return(
            <TableContainer component={Paper}>
            <Table className={useStyles.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">#</TableCell>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="left">Apellido</TableCell>
                  <TableCell align="left">Acción</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {
                         this.props.listado.map((lista,index) =>{
                            return( 
                                <TableRow key={index}>
                                   <TableCell>{index}</TableCell>
                                    <TableCell>{lista.nombre}</TableCell>
                                    <TableCell>{lista.apellido}</TableCell>
                                    <TableCell><Button variant="outlined" color="black" onClick = {()=> this.props.clickModificar(index)}>Modificar</Button></TableCell>
                                    <TableCell><Button variant="outlined" color="black" onClick = {()=> this.props.clickDestroy(index)}>Eliminar</Button></TableCell>
                                </TableRow>
                          
                             );
                         })
                    }
              </TableBody>
            </Table>
          </TableContainer>
        );
    }

}


export default Tables;