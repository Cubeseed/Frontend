import React from "react";

export interface TableProps<TItem>
  extends React.TableHTMLAttributes<HTMLTableElement> {
  headers?: string[];
  items: TItem[];
  render: (item: TItem) => React.ReactNode;
  thStyle?: string;
  extra?: React.ReactNode;
}

const Table = <TItem,>({
  headers,
  items,
  render,
  className,
  ...props
}: TableProps<TItem>) => {
  return (
    <table className={className}>
      {headers && (
        <thead className={`${props.thStyle}`}>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="p-4">{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody className="text-sm font-normal">
        {items.map((item) => render(item))} {props.extra && props.extra}
      </tbody>
    </table>
  );
};

export default Table;
