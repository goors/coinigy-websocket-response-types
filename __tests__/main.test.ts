import { RealtimeOrderResponse, RealtimeTradeResponse, TradeType } from '../src/main.js';

describe('greeter function', () => {
  const tradeResponse = new RealtimeTradeResponse();
  tradeResponse.setTradeType('BUY')

  const orderResponse = new RealtimeOrderResponse();
  orderResponse.setOrderType('Buy');

  it('get trade type', () => {
    expect(tradeResponse.getTradeType()).toBe(TradeType.Buy);
  });

  it('get order type', () => {
    expect(orderResponse.getOrderType()).toBe(TradeType.Buy);
  });

});
