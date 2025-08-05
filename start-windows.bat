@echo off
echo Building NaijaMart Fresh...
call npx vite build
call npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
echo Starting production server...
set NODE_ENV=production
node dist/index.js