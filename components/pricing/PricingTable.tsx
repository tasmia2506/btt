import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type PricingRow = Record<string, string>;

export default function PricingTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: PricingRow[];
}) {
  return (
    <div className="w-full">
      {/* Desktop table */}
      <div className="hidden sm:block border border-stone/20">
        <Table>
          <TableHeader>
            <TableRow className="bg-slag hover:bg-slag">
              {columns.map((c) => (
                <TableHead
                  key={c}
                  className="font-oswald uppercase tracking-wide text-xs font-semibold text-ice"
                >
                  {c}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i} className={i % 2 === 0 ? "bg-ice" : "bg-white"}>
                {columns.map((c, idx) => (
                  <TableCell
                    key={c}
                    className={idx === 1 ? "text-moss font-bold" : "text-slag"}
                  >
                    {row[c]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile stacked panels */}
      <div className="sm:hidden flex flex-col gap-4">
        {rows.map((row, i) => (
          <div key={i} className="border border-stone/50 bg-white p-4">
            <p className="font-oswald uppercase font-bold text-slag mb-2">{row[columns[0]]}</p>
            <dl className="space-y-1 text-sm">
              {columns.slice(1).map((c) => (
                <div key={c} className="flex justify-between gap-3">
                  <dt className="text-stone">{c}</dt>
                  <dd className="text-right font-semibold text-slag">{row[c]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
