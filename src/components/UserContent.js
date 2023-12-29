import { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

export default function UserContent() {
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Realizar la llamada a la API para obtener los datos del usuario
        // Puedes utilizar fetch o tu biblioteca de manejo de HTTP preferida
        try {
            // Simulando una llamada a la API (reemplaza esto con tu lógica real)
            const response = await fetch(`https://pre.dg0mezm.es/api/users/${userId}`);
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error("Error al obtener datos del usuario:", error);
        }
    };

    return (
        <Container className="content-container">
            <Row className="justify-content-center col-12 m-auto">
                <Col className="col-lg-8 col-xl-6">
                    {/* Formulario y datos del usuario en la misma línea */}
                    <Form onSubmit={handleFormSubmit} className="d-flex align-items-center gap-2 justify-content-center p-2">
                        <Form.Group className="w-100">
                            <Form.Control
                                type="text"
                                placeholder="Introduce URL de perfil público..."
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
            {userData && (
                <div className="ms-3">
                    <h2>Nombre del Usuario: {userData.user[0].fullname}</h2>
                </div>
            )}
        </Container>
    )
}