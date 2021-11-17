import { ALL_CURRENCIES } from "../constants/mod.ts";

import {
  ars,
  brl,
  eur,
  jpy,
  mxn,
  usd
} from '../constants/currency.ts';

export type allCurrency = typeof ALL_CURRENCIES[number];
export type AllCurrency = Uppercase<allCurrency>;

export type ars = typeof ars;
export type brl = typeof brl;
export type eur = typeof eur;
export type jpy = typeof jpy;
export type mxn = typeof mxn;
export type usd = typeof usd;

export type ARS = Uppercase<ars>;
export type BRL = Uppercase<brl>;
export type EUR = Uppercase<eur>;
export type JPY = Uppercase<jpy>;
export type MXN = Uppercase<mxn>;
export type USD = Uppercase<usd>;
