import { CellContext, ColumnDef, createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<any>();

export const tableConfig: ColumnDef<any, string>[] = [
  columnHelper.accessor("Icon", {
    cell: (props: CellContext<any, any>) => {
      const Icon = props.getValue();

      return <Icon />;
    },
  }),
  columnHelper.accessor("title", {
    cell: (props: CellContext<any, any>) => props.getValue(),
  }),
  columnHelper.accessor("button", {
    cell: (props: CellContext<any, any>) => props.getValue(),
  }),
];
