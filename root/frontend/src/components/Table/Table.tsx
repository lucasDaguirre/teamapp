import React from 'react';
import './Table.scss';
import { TableModel } from '../../../../shared/models/TableModel';

export type TableProps = {
  data: TableModel
};


const Table = ({
  data: { 
    headers, 
    rows 
  }
}: TableProps) => {

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {headers.map((e, index) => (
              <th key={index}>{e.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((e, index) => (
            <tr key={index}>
              {headers.map((header, index) => (
                <td key={index}>{e[header.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;