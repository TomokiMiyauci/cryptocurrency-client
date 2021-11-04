type Join<
  T extends string,
  U extends string,
  Separator extends string = '_'
> = `${T}${Separator}${U}`

/**
 * Make currency pair with no duplicate
 * @typeParam Q - Quote symbol
 * @typeParam B - Base symbol
 * @typeParam Separator - Symbol separator
 */
type Pair<
  Q extends string,
  B extends string,
  /**
   * @defaultValue `_`
   */
  Separator extends string = '_',
  _ = Q
> = B extends _ ? Pair<Exclude<Q, B>, B, Separator> : Join<Q, B, Separator>

export type { Pair }
