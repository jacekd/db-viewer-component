import IPoint from './Point';

export interface IColumnSchema {
  name: string;
  fk: boolean;
}

export interface ITableSchema {
  name: string;
  pos?: IPoint;
  columns: IColumnSchema[];
}

export interface ISchema {
  tables: ITableSchema[];
  arrangement?: string;
  viewport?: string;
}
