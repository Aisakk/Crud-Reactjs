import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const design = {
    paddingRight: '10px',

}

class Formulario extends Component{
    

    render(){
        return(
            <form >
                <TextField style={design} size="small" id="outlined-basic" label="Nombre" variant="outlined" name="nombre" placeholder="Nombre" value={this.props.nombre} onChange={this.props.handleChange}/>
                <TextField  style={design} size="small" id="outlined-basic2" label="Apellido" variant="outlined" name="apellido" placeholder="Apellido" value={this.props.apellido} onChange={this.props.handleChange}/>
                <Button variant="outlined" color="primary" type="submit" onClick={this.props.handleSubmit} onKeyPress={this.props.handleSubmit}>Enviar</Button>
            </form>
        )
    }

}


export default Formulario;