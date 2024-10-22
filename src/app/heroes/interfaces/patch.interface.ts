import { Heroes } from "./heroes.interface";

export interface Patch<T> {
  op: 'remove' | 'add' | 'replace';
  path: keyof T;
  value: any;
}
