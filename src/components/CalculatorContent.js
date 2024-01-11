import { useState } from "react";
import { Button, Col, Container, Row, Form, Table } from "react-bootstrap";


export default function CalculatorContent() {
    const [userId, setUserId] = useState("");
    const [userStats, setUserStats] = useState(null)


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://pre.dg0mezm.es/api/users/${userId}/stats`);
            const data = await response.json();
            data.stats[0] ? setUserStats(data.stats[0]) : setUserStats(null);
        } catch (error) {
            console.error("Error al obtener datos del usuario:", error);
        }
    };

    return (
        <Container className="content-container d-flex flex-column">
            <Row className="justify-content-center col-12 m-auto">
                <Col className="col-lg-8 col-xl-6">
                    <Form onSubmit={handleFormSubmit} className="d-flex align-items-center gap-2 justify-content-center">
                        <Form.Group className="w-100">
                            <Form.Control
                                type="text"
                                placeholder="Insert your Profile Link..."
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
            {userStats && (
                <Row className='d-flex flex-column flex-sm-row align-items-center justify-content-center col-12 col-md-10 col-lg-8 col-xl-6 pt-3 m-auto gap-3'>
                    <Col className='col-lg-8 col-xl-6 col text-center p-2 rounded' style={{ backgroundColor: '#2F3045' }}>Power: {(userStats.total) + ' GH/s'}</Col>
                </Row>
            )}
            <Row className="pt-3">
                <Col>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Network Power</th>
                                <th>Block Reward</th>
                                <th>Power Partition</th>
                                <th>Block Time</th>
                                <th>Price in USD</th>
                                <th>Cost for 1 RLT</th>
                                <th>Block</th>
                                <th>Day</th>
                                <th>Week</th>
                                <th>Month</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RLT</td>
                                <td><input type="number"/></td>
                                <td><input type="number"/></td>
                                <td>100</td>
                                <td><input type="number"/></td>
                                <td>1</td>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>BTC</td>
                                <td></td>
                                <td></td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>ETH</td>
                                <td></td>
                                <td></td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>BNB</td>
                                <td></td>
                                <td></td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>MATIC</td>
                                <td></td>
                                <td></td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>LTC</td>
                                <td></td>
                                <td></td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>DOGE</td>
                                <td></td>
                                <td></td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>SOL</td>
                                <td></td>
                                <td></td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>TRX</td>
                                <td></td>
                                <td></td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>RST</td>
                                <td></td>
                                <td></td>
                                <td>100</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}