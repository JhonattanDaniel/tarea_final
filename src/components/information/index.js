import React from "react";
import { Form, Row, Button, Col, Table } from 'react-bootstrap';
import './styles/informacion.css'

function Information() {
    return (<div>
        <h1>EDUCACION</h1>

        <Table striped bordered hover variant="dark" className="tabla">
  <thead>
    <tr>
      <th>año</th>
      <th>Institucion</th>
      <th>Lugar</th>
      <th>Culmino ?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>


        <Form>
            <Form.Group as={Row} controlId="formGridState">
                <Form.Label column sm={2}>año</Form.Label>
                <Col sm={1}>
                    <Form.Select defaultValue="seleccionar">
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Institucion
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="text" placeholder="Institucion" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Lugar
                </Form.Label>
                <Col sm={5}>
                    <Form.Control type="text" placeholder="Lugar" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                    Culmina ?
                </Form.Label>
                <Col sm={1}>
                    <Form.Check
                        type="radio"
                        label="Si"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        type="radio"
                        label="No"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 3, offset: 1 }}>
                    <Button type="submit" onClick>Enviar</Button>
                </Col>
            </Form.Group>

        </Form>

    </div>);
};


export default Information;