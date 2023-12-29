import { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

export default function UserContent() {
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://pre.dg0mezm.es/api/users/${userId}`);
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error("Error al obtener datos del usuario:", error);
        }
    };

    const getDateFormatted = (data) => {
        let date = new Date(Date.parse(data))
        const result = date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        })

        return result
    }

    const getCompleteDateFormatted = (data) => {
        let date = new Date(Date.parse(data))
        const result = date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        })

        return result
    }

    const refreshMiners = async () => {
        if (userData) {
            const userId = userData.user[0].public_profile_link;
            try {
                const response = await fetch(`https://pre.dg0mezm.es/api/users/${userId}/refresh/miners`);
                await response.json();
            } catch (error) {
                console.error("Error al obtener datos del usuario:", error);
            }
        }
    }

    return (
        <Container className="content-container">
            <Row className="justify-content-center col-12 m-auto">
                <Col className="col-lg-8 col-xl-6">
                    <Form onSubmit={handleFormSubmit} className="d-flex align-items-center gap-2 justify-content-center">
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
                <Row className="justify-content-center col-12 m-auto">
                    <Col>
                        <Row>
                            <div>Imagen</div>
                        </Row>
                        <Row>
                            <Col className="align-items-center gap-2 justify-content-center">
                                <div>Nombre: {userData.user[0].fullname}</div>
                                <div>Género: {userData.user[0].sex.toUpperCase() === 'MALE' ? "Hombre" : "Mujer"}</div>
                                <div>Fecha de registro: {getDateFormatted(userData.user[0].register_since_time)}</div>
                                <div>Última actualización: {getCompleteDateFormatted(userData.user[0].last_refresh_user_info)}</div>
                                <div>Última actualización de mineros: {getCompleteDateFormatted(userData.user[0].last_refresh_owned_miners)}</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex align-items-center gap-2 justify-content-center">
                                <Button className="" onClick={refreshMiners}>Actualizar Mineros</Button>
                                <Button className="">Actualizar Información</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )}
        </Container>
    )
}