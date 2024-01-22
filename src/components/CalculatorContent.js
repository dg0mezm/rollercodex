import { MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { useMemo, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";


export default function CalculatorContent() {
    const [userId, setUserId] = useState("");
    const [userStats, setUserStats] = useState(null);
    const [coins, setCoins] = useState([])

    const columns = useMemo(
        () => [
            {
                accessorKey: 'cryptocurrency',
                header: ' ',
                enableEditing: false,
                size: 40
            },
            {
                accessorKey: 'network_power',
                header: 'Network Power',
                enableEditing: true,
            },
            {
                accessorKey: 'network_block_reward',
                header: 'Network Block Reward',
                enableEditing: true,
            },
            {
                accessorKey: 'power_partition',
                header: 'Power Partition',
                enableEditing: true,
            },
            {
                accessorKey: 'block_time',
                header: 'Block Time',
                enableEditing: true,
            },
            {
                accessorKey: 'price_in_usd',
                header: 'Price in USD',
                enableEditing: false,
            },
            {
                accessorKey: 'cost_for_1_rlt',
                header: 'Cost for 1 RLT',
                enableEditing: false,
            },
            {
                accessorKey: 'block_reward',
                header: 'Block Reward',
                enableEditing: false,
            },
            {
                accessorKey: 'hour_reward',
                header: 'Hour Reward',
                enableEditing: false,
            },
            {
                accessorKey: 'day_reward',
                header: 'Day Reward',
                enableEditing: false,
            },
            {
                accessorKey: 'month_reward',
                header: 'Month Reward',
                enableEditing: false,
            },
            {
                accessorKey: 'year_reward',
                header: 'Year Reward',
                enableEditing: false,
            },
        ],
        [],
    );


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

    const formattedData = useMemo(() => {
        return coins.map((coin) => {

            return {
                ...coin,
            };
        });
    }, [coins]);

    const table = useMaterialReactTable({
        columns,
        data: formattedData,
        editDisplayMode: 'table',
        initialState: { density: 'compact' },
        enableEditing: true,
        enablePagination: false,
        enableSorting: false,
        enableFilters: false,
        enableHiding: false,
        enableColumnActions: false,
        enableDensityToggle: false,
        enableFullScreenToggle: false,
        enableTopToolbar: false,
        enableBottomToolbar: false,
    });

    return (
        <Container className="content-container flex-column">
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
                <Row className='d-flex flex-column flex-sm-row align-items-center justify-content-center col-12 col-md-10 col-lg-8 col-xl-6 pt-3 gap-3 m-auto'>
                    <Col className='col text-center p-2 rounded' style={{ backgroundColor: '#2F3045' }}>Power: {(userStats.total) + ' GH/s'}</Col>
                </Row>
            )}
            <Row className="pt-3">
                <Col>
                    <MaterialReactTable table={table} />
                </Col>
            </Row>
        </Container>
    )
}