export class RealtimeTradeResponse {

  public MarketHistoryId: number;
  public Exchange: string;
  public MarketId: number;
  public Tradeid: string;
  public Time: Date;
  public Price: number;
  public Quantity: number;
  public Total: number;
  public TimeLocal: string;
  public ExchangeId: number;
  public Channel: string;
  private Type: string;

  setTradeType(t: string) {
    this.Type = t;
  }

  getTradeType(): TradeType{

    if (this.Type == "BUY") {
      return TradeType.Buy
    }

    return TradeType.Sell
  }
}

export class RealtimeOrderResponse {
  public Exchange: string;
  public Market: string;
  public Timestamp: Date;
  private Ordertype: string;

  setOrderType(t: string) {
    this.Ordertype = t;
  }
  getOrderType(): TradeType{

    if (this.Ordertype == "Buy") {
      return TradeType.Buy
    }

    return TradeType.Sell
  }
}

export enum TradeType {
  Buy,
  Sell
}
