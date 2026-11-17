import type { TableRow } from "@/data/tables";
import { ZakahText } from "./ZakahTerm";

const arabicPattern = /[\u0600-\u06FF]/;

export function DataTable({
  eyebrow,
  title,
  columns,
  rows,
  note,
}: {
  eyebrow?: string;
  title: string;
  columns: string[];
  rows: TableRow[];
  note?: string;
}) {
  return (
    <div className="card-flat overflow-hidden">
      <div className="border-b border-line p-5 sm:p-6">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h3 className="mt-2 font-display text-xl tracking-tight text-ink">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="bg-surface-2">
              {columns.map((column) => (
                <th
                  key={column}
                  className="border-b border-line px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-faint"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-line last:border-0">
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 align-top leading-relaxed ${
                      cellIndex === 0 ? "text-ink" : "text-muted"
                    }`}
                  >
                    {arabicPattern.test(cell) ? (
                      <span dir="rtl" lang="ar" className="font-arabic text-[1.02rem]">
                        {cell}
                      </span>
                    ) : (
                      <ZakahText text={cell} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? (
        <p className="border-t border-line px-4 py-3 text-[0.72rem] leading-relaxed text-faint">
          <ZakahText text={note} />
        </p>
      ) : null}
    </div>
  );
}
