export interface IStock {
  code: string;
  name?: string;
  type: 'tse' | 'otc';
}