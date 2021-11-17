import { ALL_TOKENS } from "../constants/mod.ts";

import {
  chz,
  mana,
  tusd
} from '../constants/token.ts';

export type allToken = typeof ALL_TOKENS[number];
export type AllToken = Uppercase<allToken>;

export type chz = typeof chz;
export type mana = typeof mana;
export type tusd = typeof tusd;

export type CHZ = Uppercase<chz>;
export type MANA = Uppercase<mana>;
export type TUSD = Uppercase<tusd>;
