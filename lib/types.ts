import { btc, jpy, plt } from '@/constants'

type btc = typeof btc
type jpy = typeof jpy
type plt = typeof plt

type BTC = Uppercase<btc>
type JPY = Uppercase<jpy>
type PLT = Uppercase<plt>

export type { btc, jpy, BTC, JPY, plt, PLT }
