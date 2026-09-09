interface CookieTableProps {
  caption: string;
  columns: string[];
  rows: string[][];
}

export default function CookieTable({ caption, columns, rows }: CookieTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-xs md:text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="whitespace-nowrap bg-muted px-3 py-2 text-left font-semibold text-foreground"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-muted/40">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border-t px-3 py-2 align-top text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
