import * as symbols from "../constants/symbol.ts";
import { isFirstNumber } from "../_utils/regex.ts";

if (import.meta.main) {
  Object.entries(symbols).forEach(([key, value]) => {
    if (isFirstNumber.test(value)) return;
    if (key !== value.replaceAll(".", "_")) {
      console.error("Error: The symbol name is invalid");
      console.error(key, value);

      Deno.exit(1);
    }
  });
}
