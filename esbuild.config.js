import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["index.ts"],
    bundle: false,
    format: "esm",
    outfile: "./dist/index.js",
  })
  .catch(() => process.exit(1));
