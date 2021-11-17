import * as all from "./symbol.ts";
import * as allCurrency from "./currency.ts";
import * as allToken from "./token.ts";

const ALL_SYMBOLS = Object.values(all);
const ALL_CURRENCIES = Object.values(allCurrency);
const ALL_TOKENS = Object.values(allToken);

export { all, allCurrency };
export { ALL_CURRENCIES, ALL_SYMBOLS, ALL_TOKENS };
