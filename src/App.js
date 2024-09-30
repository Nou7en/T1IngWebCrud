import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container} from 'reactstrap';

const data = [
  { id: 1, plato: "Chaulafan", tipo: "China" },
  { id: 2, plato: "Pollo a la Plancha", tipo: "China" },
  { id: 3, plato: "Tallarines Saltados", tipo: "China" },
  { id: 4, plato: "Sopa Wantán", tipo: "China" },
];

class App extends React.Component {
  state = {
    data: data,
  };

  render() {
    return (
      <Container>
        <br />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Plato</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.plato}</td>
                <td>{dato.tipo}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default App;
