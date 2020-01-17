import React from "react";
import { Card, Table } from "react-bootstrap";

class Client extends React.Component {
    render() {
        return (
            <Card>
                <Card.Header as="h5">
                    Articles disponibles
                </Card.Header>
                <Card.Body>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Prix unitaire</th>
                                <th>Quantité</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </Table>

                    <hr />

                    <Table>
                        <tbody>
                            
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}

export default Client;