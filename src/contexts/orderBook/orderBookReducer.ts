import { OrderBookState, OrderBookActions } from '~/types/OrderBookTypes'

export const initialOrderBookState: OrderBookState = {
  bids: [],
  asks: [],
  orderBookConnecting: true,
  orderBookConnected: false,
  orderBookError: '',
  productIds: ['PI_XBTUSD']
}

export const orderBookReducer = (state: OrderBookState, action: OrderBookActions): OrderBookState => {
  switch (action.type) {
    case 'updateOrderBook': {
      // addOrderUpdateToBook(prevOrders, data)
      return {
        ...state,
        bids: action.orderBook?.bids,
        asks: action.orderBook?.asks
      }
    }
    case 'connectedToOrderBook': {
      return {
        ...state,
        orderBookConnecting: false,
        orderBookConnected: true
      }
    }
    case 'unsubscribeFromOrderBook': {
      return {
        ...state,
        orderBookConnecting: false,
        orderBookConnected: false
      }
    }
    case 'orderBookError': {
      return {
        ...state,
        orderBookError: action.orderBookError
      }
    }
    default: {
      // eslint-disable-next-line no-console
      console.error(`Unhandled action type: ${JSON.stringify(action, null, 2)}`)
      return state
    }
  }
}
