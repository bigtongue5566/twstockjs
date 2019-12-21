import test from 'ava';
import { StockList } from './StockList';

let stockList: StockList;

test.before(t => {
  stockList = new StockList();
  stockList.push({ code: '2330', name: '台積電', type: 'tse' }, { code: '2454', name: '聯發科', type: 'tse' });
});

test('test StockList getByCode', t => {
  const stock = stockList.getByCode('2330');
  t.is(stock!.code, '2330');
  t.is(stock!.name, '台積電');
  t.is(stock!.type, 'tse');
});

test('test StockList getByCodes', t => {
  const stock = stockList.getByCodes(['2330', '2454']);
  t.is(stock.length, 2);
});

test('test StockList getByName', t => {
  const stock = stockList.getByName('台積電');
  t.is(stock!.code, '2330');
  t.is(stock!.name, '台積電');
  t.is(stock!.type, 'tse');
});

test('test StockList getByNames', t => {
  const stock = stockList.getByNames(['台積電', '聯發科']);
  t.is(stock.length, 2);
});
