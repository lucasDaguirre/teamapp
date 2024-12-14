import React from 'react';
import './List.scss';

type ListProps = {
  data: {
    headers: { key: string; label: string }[];
    rows: { [key: string]: React.ReactNode }[];
  };
}


const List = ({
  data: { 
    headers, 
    rows 
  }
}: ListProps) => {

  return (
    <div className="list">
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
  
  
  
 /* 
  
  
  
  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.key}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header.key}>{row[header.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


*/

export default List;