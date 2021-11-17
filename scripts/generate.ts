import { configure, renderFile } from "https://deno.land/x/eta/mod.ts";

import * as SYMBOLS from "../constants/symbol.ts";
import * as CURRENCIES from "../constants/currency.ts";
import * as TOKENS from "../constants/token.ts";
import { isFirstNumber } from "../_utils/regex.ts";

import {
  dirname,
  fromFileUrl,
  resolve,
} from "https://deno.land/std@0.114.0/path/mod.ts";

if (import.meta.main) {
  const baseDir = resolve(dirname(fromFileUrl(import.meta.url)), "..");
  configure({
    views: resolve(baseDir, "views"),
  });

  const symbols = Object.entries(SYMBOLS)
    .map(([key, value]) => {
      const cleaned = value.replaceAll(".", "_");

      return isFirstNumber.test(cleaned) ? key : cleaned;
    })
    .sort();

  const currencies = Object.values(CURRENCIES).sort();
  const tokens = Object.values(TOKENS).sort();

  const content = await renderFile("symbol", {
    symbols,
  });

  const currencyContent = await renderFile("currency", {
    currencies,
  });

  const tokenContent = await renderFile("token", {
    tokens,
  });

  if (content && currencyContent && tokenContent) {
    Deno.writeTextFileSync(
      resolve(baseDir, "types", "symbol.ts"),
      content,
    );

    Deno.writeTextFileSync(
      resolve(baseDir, "types", "currency.ts"),
      currencyContent,
    );

    Deno.writeTextFileSync(
      resolve(baseDir, "types", "token.ts"),
      tokenContent,
    );
  }
}
