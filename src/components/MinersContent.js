import '../App.css';
import { useMemo, useState, useEffect, useRef } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useSessionStorageContext } from './SessionStorageProvider';
import axios from "axios";

export default function MinersContent() {
  const baseUrlRef = useRef("https://pre.dg0mezm.es/api/miners")
  const { inputValue } = useSessionStorageContext();
  const [miners, setMiners] = useState([]);
  const { saveToSessionStorage } = useSessionStorageContext();

  useEffect(() => {
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
        header: 'Nombre',
        size: 50,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'level',
        header: 'Nivel',
        filterVariant: 'range',
        size: 20,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
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
      },
    ],
    [],
  );

  const formattedData = useMemo(() => {
    return miners.map((miner) => {
      return {
        ...miner,
        level: (miner.level + 1),
        bonus_percent: (miner.bonus_percent * 100).toFixed(2) + '%',
        bonus_ratio: (miner.bonus_ratio * 100).toFixed(5) + '%',
        power_ratio: (miner.power_ratio).toFixed(2),
      };
    });
  }, [miners]);

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
    enableColumnActions: false
  });
  if (!miners) return null;

  return (
    <div className="content-container">
      <div className='InputProfile'>
        <input id='profileUrl' type='text' placeholder='Introduzca URL de perfil público...'></input>
        <button onClick={handleButton}>Enviar</button>
      </div>
      <MaterialReactTable table={table} />
    </div>
  );
}