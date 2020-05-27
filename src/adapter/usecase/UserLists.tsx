import { Column } from "material-table";
export interface Row {
  name: string;
  ucc: string;
  mobile: number;
  pan: string;
  email: string;
  stage: string;
  aof: string;
}

export interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}
