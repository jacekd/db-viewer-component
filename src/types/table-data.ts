import Point from "./point";
export default interface TableData {
  name: string;
  pos: Point;
  width: number;
  height: number;
  modified: string;
  // eslint-disable-next-line semi
}
