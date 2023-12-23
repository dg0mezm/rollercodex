import '../App.css';
import { useMemo, useState, useEffect, useRef } from 'react';
import axios from "axios";
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useSessionStorageContext } from '../SessionStorageProvider';

export default function Main() {
    const baseUrlRef = useRef("https://pre.dg0mezm.es/api/miners")
    const { inputValue } = useSessionStorageContext();
    const [miners, setMiners] = useState([]);

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


    const columns = useMemo(
        () => [
          {
            accessorKey: 'name',
            header: 'Nombre',
          },
          {
            accessorKey: 'level',
            header: 'Level',
          },
          {
            accessorKey: 'power',
            header: 'Power',
            filterVariant: 'range',
          },
          {
            accessorKey: 'bonus_percent',
            header: 'Bonus',
            filterVariant: 'range',
          },
          {
            accessorKey: 'price',
            header: 'Price',
            filterVariant: 'range',
          },
          {
            accessorKey: 'power_ratio',
            header: 'Power Ratio',
            filterVariant: 'range',
          },
          {
            accessorKey: 'bonus_ratio',
            header: 'Bonus Ratio',
            filterVariant: 'range',
          },
          {
            accessorKey: 'miner_type',
            header: 'Type',
          },
          {
            accessorKey: 'supply',
            header: 'Supply',
          },
        ],
        [],
      );

      const formattedData = useMemo(() => {
        return miners.map((miner) => {
          return {
            ...miner,        
            bonus_percent: (miner.bonus_percent * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '%',
            bonus_ratio: (miner.bonus_ratio * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 5 }) + '%',
          };
        });
      }, [miners]);

      const table = useMaterialReactTable({
        columns,
        data: formattedData,
      });
    if (!miners) return null;

    return (
        <div className="Main">
            <MaterialReactTable table={table} />
        </div>
  );
}