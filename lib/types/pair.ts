import type { allSymbols, keyCurrency, jpy } from '@/types/symbol'

type Join<
  T extends string,
  U extends string,
  Separator extends string = '_'
> = `${T}${Separator}${U}`

type DropChar<
  T extends string,
  U extends string
> = T extends `${infer prefix}${U}${infer suffix}`
  ? DropChar<`${prefix}${suffix}`, U>
  : T

type all_Pairs = Exclude<Join<Exclude<allSymbols, jpy>, keyCurrency>, 'btc_btc'>
type All_Pairs = Uppercase<all_Pairs>
type allPairs = DropChar<all_Pairs, '_'>
type AllPairs = DropChar<All_Pairs, '_'>

export type { all_Pairs, All_Pairs, allPairs, AllPairs }
