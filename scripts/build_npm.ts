import { build } from "https://deno.land/x/dnt@0.7.1/mod.ts";

import {
  dirname,
  fromFileUrl,
  resolve,
} from "https://deno.land/std@0.114.0/path/mod.ts";

const baseDir = resolve(dirname(fromFileUrl(import.meta.url)), "..");

await build({
  entryPoints: [resolve(baseDir, "mod.ts")],
  outDir: resolve(baseDir, "npm"),
  test: false,
  compilerOptions: {
    sourceMap: true,
  },
  package: {
    name: "cc-types",
    description: "Crypto currency utility types and constants",
    version: Deno.args[0]?.replace(/^v/, ""),
    license: "MIT",
    sideEffects: false,
    author: {
      name: "TomokiMiyauci",
      email: "contact@miyauchi.dev",
      url: "https://miyauchi.dev/",
    },
    repository: {
      type: "git",
      url: "https://github.com/coinset/cc-types.git",
    },
    bugs: "https://github.com/coinset/cc-types/issues",
    homepage: "https://github.com/coinset/cc-types#readme",
    funding: {
      type: "patreon",
      url: "https://www.patreon.com/tomoki_miyauci",
    },
    keywords: [
      "crypto currency",
      "cc",
      "types",
      "utility",
    ],
  },
});

Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
