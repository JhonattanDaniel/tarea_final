import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Button, Col, Table } from 'react-bootstrap';



class Tabla extends Component {
    // constructor(anio, institucion, lugar, culmino) {
    //     anio = 0,
    //         institucion= "",
    //         lugar= "",
    //         this.culmino= false
    // }

    constructor(props) {
        super(props)
        this.state = {
            elementos: [
                'elemento 1',
                'Elemento 2',

            ],
            //contador: 0
            texto: "",
            anio: "",
        }
        this.clickBoton = this.clickBoton.bind(this)
        // this.variables = this.variables.bind(this)
        this.cambioInput = this.cambioInput.bind(this)
    }

    clickBoton() {
        const { elementos } = this.state
        const el = this.texto

        this.setState((state, props) => ({
            elementos: [...state.elementos, el],
            
        }))
        // console.log(this.anio);
        console.log(this.texto);
    }

    // variables() {
    //     var anio = document.getElementById("anio").id;
    // }

    cambioInput(evt) {
        const val = evt.target.value
        //var texto = document.getElementById("texto").value;
        this.setState({ texto: val })
        console.log(this.texto)
    }

    render() {
        const { elementos, texto, anio } = this.state


        return (<>
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
                        {elementos.map((e, i) => <tr key={i}>{e}</tr>)}
                        <td>{anio}</td>
                        {/* <td></td>
                        <td></td>
                        <td></td> */}
                    </tr>
                </tbody>
            </Table>

            <Form>
                <Form.Group as={Row} controlId="formGridState">
                    <Form.Label column sm={2}>año</Form.Label>
                    <Col sm={1}>
                        <Form.Select id="anio" name="anio" defaultValue="seleccionar" >
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3"  controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Institucion
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" name={texto} onchange={this.cambioInput} placeholder="Institucion" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Lugar
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" name="lugar"  placeholder="Lugar" />
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
                        <Button onClick={this.cambioInput}>Enviar</Button>
                    </Col>
                    
                </Form.Group>

                <input type="text" value={texto} onChange={this.cambioInput} placeholder="Institucion" />

            </Form>

            

        </>)
    }


}

export default Tabla;

