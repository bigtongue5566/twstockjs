import { IStock } from '../../../interfaces';

export class StockList extends Array<IStock> {
  constructor(...items: IStock[]) {
    super(...items);
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, StockList.prototype);
  }
  public getByCode(code: string) {
    return this.find(e => e.code === code);
  }
  public getByCodes(codes: string[]) {
    return this.filter(e => codes.includes(e.code));
  }
  public getByName(name: string) {
    return this.find(e => e.name === name);
  }
  public getByNames(names: string[]) {
    return this.filter(e => names.includes(e.name as string));
  }
}
