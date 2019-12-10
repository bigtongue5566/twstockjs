export interface IRealtimeData {
  dateTime: Date;
  name: string;
  code: string;
  price: number;
  volume: number;
  change: number;
  percentChange: number;
  low: number;
  high: number;
  open: number;
  prevClose: number;
  bestBidPrice: number[];
  bestBidVolume: number[];
  bestAskPrice: number[];
  bestAskVolume: number[];
}
