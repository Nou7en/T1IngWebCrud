import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
  { id: 1, plato: "Chaulafan", tipo: "China" },
  { id: 2, plato: "Pollo a la Plancha", tipo: "China" },
  { id: 3, plato: "Tallarines Saltados", tipo: "China" },
  { id: 4, plato: "Sopa Wantán", tipo: "China" },
];

class App extends React.Component {
  state = {
    data: data,
    modalInsertar: false,
    form: {
      id: "",
      plato: "",
      tipo: "",
    },
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("¿Estás seguro que deseas eliminar el plato " + dato.plato + "?");
    if (opcion === true) {
      var arreglo = this.state.data.filter(item => item.id !== dato.id);
      this.setState({ data: arreglo });
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <Container>
        <br />
        <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Plato</th>
              <th>Tipo</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.plato}</td>
                <td>{dato.tipo}</td>
                <td>
                  <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar Plato</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Plato:</label>
              <input
                className="form-control"
                name="plato"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Tipo:</label>
              <input
                className="form-control"
                name="tipo"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>Insertar</Button>
            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default App;
