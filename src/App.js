import React, {Component} from 'react';
import Formulario from './components/formulario/Formulario';
import Tables from './components/table/Tables';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      nombre:'',
      apellido: '',
      active: 0,
      index: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit(e){
    var lista = this.state.list
    var index = this.state.index
    if(this.state.active === 0){
      lista.push({nombre:this.state.nombre,apellido:this.state.apellido})
      this.setState({
          nombre:'',
          apellido:'',
      })
    }else{
      var value = lista.indexOf(index)
      lista[value].nombre = this.state.nombre
      lista[value].apellido = this.state.apellido
      
      this.setState({
        list:lista,
        nombre:'',
        apellido: '',
        active:0,
        index:''
      })
      
     
    }
   
    e.preventDefault();
  }

  handleDestroy = (value)=> {
  
    let remove = this.state.list;
    remove.splice(value, 1);
    this.setState({
      list:remove
    })
 }
 clickModificar = (value) =>{
  let modificar = this.state.list[value];
  this.setState({
    nombre: modificar.nombre,
    apellido: modificar.apellido,
    active: 1,
    index: modificar,
    
  })

 }
  render(){
    return (
        <div className="container">
            <Formulario 
              nombre={this.state.nombre} 
              apellido={this.state.apellido} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              />
            <Tables listado={this.state.list} clickDestroy={this.handleDestroy} clickModificar={this.clickModificar}/>
           
        </div>
      );
    }
}

export default App;



/*{ <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }*/