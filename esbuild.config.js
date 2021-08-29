require('esbuild').build({
  entryPoints: ['index.ts'],
  bundle: true,
  outfile: './dist/index.js',
}).catch(() => process.exit(1))
