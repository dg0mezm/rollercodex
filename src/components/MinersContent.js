import { useMemo, useState, useEffect, useRef } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useSessionStorageContext } from './SessionStorageProvider';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import axios from "axios";
import '../static/styles/Miners.css'

export default function MinersContent() {
  const [miners, setMiners] = useState([]);
  const [userStats, setUserStats] = useState(null)
  const baseUrlRef = useRef("https://pre.dg0mezm.es/api/miners")
  const statsUrlRef = useRef()
  const { inputValue } = useSessionStorageContext();
  const { saveToSessionStorage } = useSessionStorageContext();

  useEffect(() => {
    if (inputValue) {
      statsUrlRef.current = `https://pre.dg0mezm.es/api/users/${inputValue}/stats`
      axios.get(statsUrlRef.current).then((response) => {
        response.data.stats[0] ? setUserStats(response.data.stats) : setUserStats(null);
      });
    }

    if (inputValue) {
      baseUrlRef.current = `https://pre.dg0mezm.es/api/users/${inputValue}/miners/left`
    } else {
      baseUrlRef.current = "https://pre.dg0mezm.es/api/miners"
    }
    axios.get(baseUrlRef.current).then((response) => {
      setMiners(response.data.miners);
    });
    
  }, [inputValue]);

  const handleButton = (e) => {
    saveToSessionStorage(document.querySelector('#profileUrl').value);
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        size: 100,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'level',
        header: 'Level',
        filterVariant: 'range',
        size: 20,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        enableGlobalFilter: false,
      },
      {
        accessorKey: 'power',
        header: 'Power',
        filterVariant: 'range',
        size: 10,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        enableGlobalFilter: false,
      },
      {
        accessorKey: 'bonus_percent',
        header: 'Bonus',
        filterVariant: 'range',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        enableGlobalFilter: false,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        filterVariant: 'range',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        enableGlobalFilter: false,
      },
      {
        accessorKey: 'power_ratio',
        header: 'Power Ratio',
        filterVariant: 'range',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        enableGlobalFilter: false,
      },
      {
        accessorKey: 'bonus_ratio',
        header: 'Bonus Ratio',
        filterVariant: 'range',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        enableGlobalFilter: false,
      },
    ],
    [],
  );

  const formattedData = useMemo(() => {
    return miners.map((miner) => {
      let bonus_ratio = miner.bonus_percent > 0 && miner.price > 0 ? miner.bonus_percent / miner.price : 0;
      let power_ratio = miner.price > 0 ? miner.power / miner.price : 0;
      
      if (userStats) {
        let power = userStats[0].games + userStats[0].miners;
        let power_from_miner_bonus_to_miner_power = miner.bonus_percent > 0 ? (miner.power * miner.bonus_percent) : 0;
        let power_from_miner_bonus_to_user_power = miner.bonus_percent > 0 ? (miner.bonus_percent * power) : 0;
        let power_from_user_bonus_to_miner_power = userStats[0].bonus_percent > 0 ? (miner.power * (userStats[0].bonus_percent / 10000)) : 0;

        power_ratio = miner.price > 0 ? (power_from_miner_bonus_to_miner_power + power_from_miner_bonus_to_user_power + power_from_user_bonus_to_miner_power + miner.power) / miner.price : 0;
      }

      return {
        ...miner,
        level: (miner.level + 1),
        bonus_percent: (miner.bonus_percent * 100).toFixed(2) + '%',
        bonus_ratio: (bonus_ratio * 100).toFixed(5) + '%',
        power_ratio: (power_ratio).toFixed(2),
      };
    });
  }, [miners, userStats]);

  const table = useMaterialReactTable({
    columns,
    data: formattedData,
    initialState: {
      pagination: { pageSize: 25, pageIndex: 0 },
      showGlobalFilter: true,
      density: 'compact',
    },
    enableDensityToggle: false,
    enableHiding: false,
    enableFullScreenToggle: false,
    columnFilterDisplayMode: 'popover',
    enableColumnActions: false,
    globalFilterFn: 'contains',
  });
  if (!miners) return null;

  return (
    <div className="content-container">
      <Container className="d-flex flex-column align-items-center justify-content-center col-12 col-lg-8">
        <InputGroup className="mb-3">
          <FormControl id='profileUrl'
            placeholder="Insert your Profile Link..."
            aria-label="Insert your Profile Link..."
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2" style={{ marginLeft: '10px' }} onClick={handleButton}>
            Enviar
          </Button>
        </InputGroup>

        {userStats && (
          <Row className='d-flex flex-column flex-sm-row align-items-center justify-content-center col-12 col-md-10 col-lg-8 col-xl-6 mb-3 gap-3'>
            <Col className='text-center p-2 rounded' style={{ backgroundColor: '#2F3045'}}>Power: {(userStats[0].games + userStats[0].miners) + ' GH/s'}</Col>
            <Col className='text-center p-2 rounded' style={{ backgroundColor: '#2F3045'}}>Bonus: {(userStats[0].bonus_percent > 0 ? userStats[0].bonus_percent / 10000: 0.00) + '%'}</Col>
          </Row>
        )}
        
        <MaterialReactTable table={table} />
      </Container>
    </div>
  );
}