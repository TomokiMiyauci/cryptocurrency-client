import {
  btc,
  jpy,
  plt,
  etc,
  fct,
  mona,
  eth,
  lsk,
  xrp,
  xem,
  ltc,
  bch,
  xlm,
  qtum,
  bat,
  iost,
  enj,
  omg,
  ALL
} from '@/constants/symbol'

type allSymbols = typeof ALL[number]
type AllSymbols = Uppercase<allSymbols>

type btc = typeof btc
type jpy = typeof jpy
type plt = typeof plt
type etc = typeof etc
type fct = typeof fct
type mona = typeof mona
type eth = typeof eth
type lsk = typeof lsk
type xrp = typeof xrp
type xem = typeof xem
type ltc = typeof ltc
type bch = typeof bch
type xlm = typeof xlm
type qtum = typeof qtum
type bat = typeof bat
type iost = typeof iost
type enj = typeof enj
type omg = typeof omg

type keyCurrency = jpy | btc

type BTC = Uppercase<btc>
type JPY = Uppercase<jpy>
type PLT = Uppercase<plt>
type ETC = Uppercase<etc>
type FCT = Uppercase<fct>
type MONA = Uppercase<mona>
type ETH = Uppercase<eth>
type LSK = Uppercase<lsk>
type XRP = Uppercase<xrp>
type XEM = Uppercase<xem>
type LTC = Uppercase<ltc>
type BCH = Uppercase<bch>
type XLM = Uppercase<xlm>
type QTUM = Uppercase<qtum>
type BAT = Uppercase<bat>
type IOST = Uppercase<iost>
type ENJ = Uppercase<enj>
type OMG = Uppercase<omg>

export type {
  btc,
  jpy,
  BTC,
  JPY,
  plt,
  etc,
  fct,
  mona,
  eth,
  lsk,
  xrp,
  xem,
  ltc,
  bch,
  xlm,
  qtum,
  bat,
  iost,
  enj,
  omg,
  PLT,
  ETC,
  FCT,
  MONA,
  ETH,
  LSK,
  XRP,
  XEM,
  LTC,
  BCH,
  XLM,
  QTUM,
  BAT,
  IOST,
  ENJ,
  OMG,
  allSymbols,
  AllSymbols,
  keyCurrency
}
