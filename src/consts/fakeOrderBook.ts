import { BidAskOrderBook } from '../types/OrderBookTypes'

const asks: BidAskOrderBook[] = [
  [0.4585, 0],
  [0.4586, 1327],
  [0.4587, 5000],
  [0.4588, 54836],
  [0.4589, 16418],
  [0.4591, 12978],
  [0.4592, 3082],
  [0.4593, 30148],
  [0.4594, 44442],
  [0.4595, 2968],
  [0.4596, 29039],
  [0.4597, 38631],
  [0.4598, 31279],
  [0.4601, 52784],
  [0.4604, 0],
  [0.4607, 101600]
]

const bids: BidAskOrderBook[] = [
  [0.4352, 0],
  [0.4353, 6000],
  [0.4571, 6988],
  [0.4573, 50148],
  [0.4574, 37669],
  [0.4575, 8096],
  [0.4576, 12591],
  [0.4577, 17980],
  [0.4578, 53499],
  [0.4579, 1296],
  [0.458, 14073],
  [0.4581, 510]
]

export const fakeAskData = [
  { price: 0.4607, size: 101600, total: 424532 },
  { price: 0.4601, size: 52784, total: 322932 },
  { price: 0.4598, size: 31279, total: 270148 },
  { price: 0.4597, size: 38631, total: 238869 },
  { price: 0.4596, size: 0, total: 200238 },
  { price: 0.4595, size: 2968, total: 171199 },
  { price: 0.4594, size: 44442, total: 168231 },
  { price: 0.4593, size: 30148, total: 123789 }
]

const fakeOrderBook = {
  asks,
  bids,
  feed: ''
}

export default fakeOrderBook
