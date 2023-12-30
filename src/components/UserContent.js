import { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

const hasPassed15Minutes = (lastRefresh) => {
    const fifteenMinutesInMillis = 15 * 60 * 1000;
    const now = new Date().getTime();
    const lastRefreshTime = new Date(lastRefresh).getTime();

    return now - lastRefreshTime > fifteenMinutesInMillis;
};

export default function UserContent() {
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://pre.dg0mezm.es/api/users/${userId}`);
            const data = await response.json();
            data.user[0] ? setUserData(data.user[0]) : setUserData(null);
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
            if (hasPassed15Minutes(userData.last_refresh_owned_miners)) {
                try {
                    const response = await fetch(`https://pre.dg0mezm.es/api/users/${userId}/refresh/miners`);
                    const data = await response.json();
                    data.data[0] ? setUserData(data.data[0]) : setUserData(null);
                } catch (error) {
                    console.error("Error al obtener datos del usuario:", error);
                }
            } else {
                alert('ATENTION: It can only be refreshed once every 15 minutes.')
            }
        }
    }

    const refreshUserInfo = async () => {
        if (userData) {
            if (hasPassed15Minutes(userData.last_refresh_user_info)) {
                try {
                    const response = await fetch(`https://pre.dg0mezm.es/api/users/${userId}/refresh/info`);
                    const data = await response.json();
                    data.data[0] ? setUserData(data.data[0]) : setUserData(null);
                } catch (error) {
                    console.error("Error al obtener datos del usuario:", error);
                }
            } else {
                alert('ATENTION: It can only be refreshed once every 15 minutes.')
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
                                placeholder="Insert your Profile Link..."
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
                <Row className="justify-content-center col-12 m-auto col-md-10 col-lg-6">
                    <Col className="user-info d-flex gap-4 m-3 p-2 border rounded">
                        <Row className="d-flex">
                            <Col className="col-12">
                                <div>Name: {userData.fullname}</div>
                                <div>Sex: {userData.sex.toUpperCase()}</div>
                                <div>Power: {userData.power}</div>
                                <div>Registration date: {getDateFormatted(userData.register_since_time)}</div>
                                <div>Last Information Update: {getCompleteDateFormatted(userData.last_refresh_user_info)}</div>
                                <div>Last Owned Miners Update: {getCompleteDateFormatted(userData.last_refresh_owned_miners)}</div>
                            </Col>
                            <Col>
                                <Row className="mt-2">
                                    <Col className="d-flex align-items-center gap-2 justify-content-center">
                                        <Button className="p-1" onClick={refreshUserInfo}>Refresh Information</Button>
                                        <Button className="p-1" onClick={refreshMiners}>Refresh Miners</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )}
        </Container>
    )
}